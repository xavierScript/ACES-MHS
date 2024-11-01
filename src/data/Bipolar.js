import {CommentOnAssessment, Bipolar } from "./Comments.js"


//selects a comment depending on user's Bipolar assessment
 const PickComment = Math.floor(Math.random() * 2)
 
 const Bipolar_Assessment =  (result) => {   
   var range = result
    switch (true) {

        case (range <= 5) :
            const CommentOnAssessment0 = new CommentOnAssessment([Bipolar.Range0_5[0],Bipolar.Range0_5[1]])
             return (CommentOnAssessment0.GetComment[PickComment])
                break;
    
            case (range <= 10 && range >= 6):
            const CommentOnAssessment1 = new CommentOnAssessment([Bipolar.Range6_10[0],Bipolar.Range6_10[1]])
            return CommentOnAssessment1.GetComment[PickComment]
                break;
    
            case (range <= 15 && range >= 11):
            const CommentOnAssessment2 = new CommentOnAssessment([Bipolar.Range11_15[0],Bipolar.Range11_15[1]])
            return CommentOnAssessment2.GetComment[PickComment]   
                break;
    
            case (range <= 20 && range >= 16):
            const CommentOnAssessment3 = new CommentOnAssessment([Bipolar.Range16_20[0],Bipolar.Range16_20[1]])
            return CommentOnAssessment3.GetComment[PickComment]   
                break;
    
            case (range <= 25 && range >= 21):
            const CommentOnAssessment4 = new CommentOnAssessment([Bipolar.Range21_25[0],Bipolar.Range21_25[1]])
            return CommentOnAssessment4.GetComment[PickComment] 
                break;
    
            case (range <= 30 && range >= 26):
            const CommentOnAssessment5 = new CommentOnAssessment([Bipolar.Range26_30[0],Bipolar.Range26_30[1]])
            return CommentOnAssessment5.GetComment[PickComment]   
                break;
    
            case (range <= 35 && range >= 31):
            const CommentOnAssessment6 = new CommentOnAssessment([Bipolar.Range31_35[0],Bipolar.Range31_35[1]])
            return CommentOnAssessment6.GetComment[PickComment]    
                break;
    
            case (range <= 40 && range >= 36):
            const CommentOnAssessment7 = new CommentOnAssessment([Bipolar.Range36_40[0],Bipolar.Range36_40[1]])
            return CommentOnAssessment7.GetComment[PickComment]    
                break;
    
            case (range <= 45 && range >= 41):
            const CommentOnAssessment8 = new CommentOnAssessment([Bipolar.Range41_45[0],Bipolar.Range41_45[1]])
            return CommentOnAssessment8.GetComment[PickComment]    
                break;
    
            case (range <= 50 && range >= 46):
             const CommentOnAssessment9 = new CommentOnAssessment([Bipolar.Range46_50[0],Bipolar.Range46_50[1]])
             return CommentOnAssessment9.GetComment[PickComment]   
                break;
        
            default:
                return "error getting assesssment"
                break;
    }
}

export {Bipolar_Assessment}