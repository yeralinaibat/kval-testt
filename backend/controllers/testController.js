const Test = require('../models/Test');


class testController { 
   async getTestByCategory (req,res){
       try{
           console.log(req.query.category);
           if (req.query.category === undefined) {
               return res.json(
                   {message: 'поле катешорие пустое'}
               )
           }
            var category = req.query.category //запрос с фронта 
            var amount = req.query.amount
            // if (amount === undefined){
            //     amount = 1
            // }
            const tests = await Test.find({ // ищем ответ 
                category
            }).limit(amount)


            return res.json(
               tests
            )
       } catch (error) {
            console.log(error);
       }
   }  
}

module.exports = new testController()