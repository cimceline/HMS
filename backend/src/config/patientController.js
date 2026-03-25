const db = require('../config/db.js');

const getAllPatients = async(req, res) => {
    try{
        let query = 'SELECT * FROM patients';
        const [rows] = await db.execute(query);
        res.json(rows);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({ error: 'internal server error' });
      }
      
}

//registering new patient
const createPatient =async(req, res) =>{
    try{
        const {name,age,gender,ward,diagnosis} = req.body;
        let sql="INSERT INTO patients(name,age,gender,ward,diagnosis) VALUES(?,?,?,?,?)";
        const values = [name,age,gender,ward,diagnosis];
        const [rows] = await db.query(sql,[name,age,gender,ward,diagnosis]);

        res.status(201).json({
            message: 'Patient registered successfully',
            patientId: rows.insertId,

        });

    }catch (error) {
        console.error('Error registering patient:', error);

    }
}
 //update patient details;

 const updatePatient = async(req, res) => {
    try {
        const {id} = req.params;
        const {name,age,gender, ward,diagnosis} = req.body;
        let sql = 'UPDATE patients  SET name=?, age=?, gender=?, ward=?, diagnosis=? WHERE id=?';
        const values = [name,age,gender,ward,diagnosis,id];
        await db.query(sql, values);
        res.json({message: 'Patient details updated successfully'});
    } catch (error) {
        console.error('Error updating patient details:', error);
        res.status(500).json({error: 'Internal server error'});
    }}

    //delete patient details
    const deletePatient = async(req, res) =>{
        try{
            const {id}= req.params;
            let sql ='DELETE FROM patients WHERE id=?';
            const values = [id];
            await db.query(sql, values);
            res.json({message: 'Patient details deleted successfully'});
        } catch (error) {
            console.error('Error deleting patient details:', error);
            res.status(500).json({error: 'Internal server error'});
        }
    }
module.exports ={getAllPatients, createPatient, updatePatient, deletePatient};

