const appoinment = require('./../model/appoinmentModel');
 
exports.createAppoinment= async(req,res)=>{
    try{
// console.log(req.body)
        const createAppoinment= await appoinment.create(req.body);
        res.status(200).json({
            message: "appoinment created",
            data: createAppoinment,
        })

    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}

exports.getAppoinment= async(req,res)=>{
    try{
       
        const  appoinments= await appoinment.find({})
          .populate({
            path:     'department',			
            populate: { path:  'hospital',
                    model: 'hospital' }
          })
        

        ;
        res.status(200).json({
            message: 'all Appoinments',
            data: appoinments,  
        });

    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}


 

exports.updateAppoinment= async(req,res)=>{
    try{
        const updateApp= await appoinment.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: "appoinment updated",
            data: updateApp,
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    } 
}
exports.deleteApp= async(req,res)=>{
    try{
        const deleteApp= await appoinment.findById(req.params.id);
        res.status(200).json({
            message: 'Appoinment deleted',
        })
    }catch(e){
        res.status(400).json({
            message:e.message
        });
    }}

    exports.getAppoinmentById= async(req,res)=>{
        try{

           
            const Appoinm= await appoinment.find({hospital: req.params.id}, {department: req.params.id}, {doctor: req.params.id}) 
            .populate('hospital')
            .populate('department')
            .populate('doctor');


            res.status(200).json({
                message: "you search and it is here",
                data: Appoinm,
            });
        }catch(e){
            res.status(400).json({ 
                message: e.message,
            });
        } }









