import express from "express";
import Customer from "../model/Customer";
import {addCustomer, deleteCustomer, getAllCustomers, updateField} from "../services/customerService";

const router = express.Router();

router.post("/add", async(req, res) => {
    const customer: Customer = req.body;
    console.log("Received Data", customer);
    try{
        const addCustomers = await addCustomer(customer);
        console.log(addCustomers)
        res.status(201).send("Customer Added")
    } catch (error: any){
        console.log("Error adding Customer");
        console.log(error.message)
        if (error.message === 'The customer with this email exists') {
            res.status(400).send(error.message);
        } else {
            res.status(500).send("An error occurred while adding the customer.");
        }
    }
})

router.delete("/delete/:id", async (req, res) =>{
    console.log("Delete Customer...");
    const id: string = req.params.id
    try{
        await deleteCustomer(id);
        res.status(204).send('Customer Deleted');
    } catch (error: any){
        console.log("Error deleting Customer", error);
        if(error.message === 'This customer doesnt exists'){
            res.status(404).send(error.message);
        } else {
            res.status(500).send("An error occurred while deleting the customer.");
        }
    }
})

router.put("/update/:id", async (req, res) => {
    console.log("Updating customer...");
    const id:string = req.params.id;
    const customer: Customer = req.body;
    try{
        await updateField(id, customer)
        res.send(204).send("Customer updated successfully");
    } catch (error){
        console.log("error updating customer", error);
    }
})

router.get("/get", async (req, res) => {
    console.log("Fetching all customers");
    try{
        const customers = await getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        console.log("Error getting customers",error)
    }
})

export default router;