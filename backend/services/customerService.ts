import {PrismaClient } from "@prisma/client";
import Customer from "../model/Customer";

const prisma = new PrismaClient();

export async function addCustomer(customer: Customer) {
    console.log("Adding Customer...");
    try {
        await prisma.customer.create({
            data: {
                name: customer.name,
                email: customer.email,
                number: customer.number,
                address: customer.address
            }
        });
        console.log("Customer [", customer.name, "] added successfully !!!")
    } catch (error) {
        if(error){
            if((error as any).code == 'P2002'){
                throw new Error("The customer with this email exists");
            }
        }
        throw error;
    }
}

//

export async function deleteCustomer(email: string){
    try{
        await prisma.customer.delete({
            where: {email: email}
        })
        console.log('Customer Deleted : [',email,"]");
    } catch (error) {
        console.log("Error deleting customer", error);
        if(error){
            if((error as any).code === 'P2025'){
                throw new Error("The customer with this email doesnt exists");
            }
        }
        throw error;
    }
}

export async function updateField(email: string, customer: Customer){
    try{
        await prisma.customer.update({
            where:{email: email},
            data:{
                name: customer.name,
                email: customer.email,
                number: customer.number,
                address: customer.address
            }
        })
        console.log("Customer [",customer.name,"] updated successfully !!!")
    } catch (error) {
        console.log("Error updating customer", error);
        if(error){
            if((error as any).code === 'P2025'){
                throw new Error("The customer with this email doesnt exists");
            }
        }
        throw error;
    }
}

export async function getAllCustomers(){
    try{
        return await prisma.customer.findMany();
    } catch (error){
        console.log("Error getting customers \n",error)
    }
}


