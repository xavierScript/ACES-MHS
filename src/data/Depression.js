import {CommentOnAssessment, Depression } from "./Comments.js"


//selects a comment depending on user's Depression assessment
 const PickComment = Math.floor(Math.random() * 2)
 
 const Depression_Assessment =  (result) => {   
   var range = result
    switch (true) {

        case (range <= 5) :
        const CommentOnAssessment0 = new CommentOnAssessment([Depression.Range0_5[0],Depression.Range0_5[1]])
         return (CommentOnAssessment0.GetComment[PickComment])
            break;

        case (range <= 10 && range >= 6):
        const CommentOnAssessment1 = new CommentOnAssessment([Depression.Range6_10[0],Depression.Range6_10[1]])
        return CommentOnAssessment1.GetComment[PickComment]
            break;

        case (range <= 15 && range >= 11):
        const CommentOnAssessment2 = new CommentOnAssessment([Depression.Range11_15[0],Depression.Range11_15[1]])
        return CommentOnAssessment2.GetComment[PickComment]   
            break;

        case (range <= 20 && range >= 16):
        const CommentOnAssessment3 = new CommentOnAssessment([Depression.Range16_20[0],Depression.Range16_20[1]])
        return CommentOnAssessment3.GetComment[PickComment]   
            break;

        case (range <= 25 && range >= 21):
        const CommentOnAssessment4 = new CommentOnAssessment([Depression.Range21_25[0],Depression.Range21_25[1]])
        return CommentOnAssessment4.GetComment[PickComment] 
            break;

        case (range <= 30 && range >= 26):
        const CommentOnAssessment5 = new CommentOnAssessment([Depression.Range26_30[0],Depression.Range26_30[1]])
        return CommentOnAssessment5.GetComment[PickComment]   
            break;

        case (range <= 35 && range >= 31):
        const CommentOnAssessment6 = new CommentOnAssessment([Depression.Range31_35[0],Depression.Range31_35[1]])
        return CommentOnAssessment6.GetComment[PickComment]    
            break;

        case (range <= 40 && range >= 36):
        const CommentOnAssessment7 = new CommentOnAssessment([Depression.Range36_40[0],Depression.Range36_40[1]])
        return CommentOnAssessment7.GetComment[PickComment]    
            break;

        case (range <= 45 && range >= 41):
        const CommentOnAssessment8 = new CommentOnAssessment([Depression.Range41_45[0],Depression.Range41_45[1]])
        return CommentOnAssessment8.GetComment[PickComment]    
            break;

        case (range <= 50 && range >= 46):
         const CommentOnAssessment9 = new CommentOnAssessment([Depression.Range46_50[0],Depression.Range46_50[1]])
         return CommentOnAssessment9.GetComment[PickComment]   
            break;
    
        default:
            return "error getting assesssment"
            break;
    }
}

export {Depression_Assessment}