import { CommentOnAssessment } from "./Comments"

//selects a comment depending on user's mental assessment
 const PickComment = Math.floor(Math.random() * 3)
 
 const GeneralMentalAssessment =  (result) => {   
   var range = result
    switch (true) {

        case (range <= 5) :
        const CommentOnAssessment0 = new CommentOnAssessment([
            "Severe mental health issues. You may be experiencing significant distress, marked by persistent and overwhelming symptoms that disrupt all areas of daily life. Immediate intervention is critical. Professional support, including crisis intervention and possibly inpatient care, is essential.",
            "Severe mental health issues. Immediate intervention needed. Professional support, Therapy or counseling can be instrumental in addressing these issues and improving your quality of life.",
            "Severe Distress. You may be experiencing intense emotional pain, debilitating symptoms, or crises that require immediate intervention.Immediate intervention is critical. Professional support, including crisis intervention and possibly inpatient care, is essential."
        ])
         return (CommentOnAssessment0.GetComment[PickComment])
            break;

        case (range <= 10 && range >= 6):
        const CommentOnAssessment1 = new CommentOnAssessment([
            "High Distress. You show signs of significant struggle with daily functioning, possibly facing anxiety, depression, or trauma responses. Professional Therapy needed, Engage in regular therapy sessions to explore underlying issues and develop coping strategies.",
            "Critical concerns. Struggling with daily functioning and support is essential. Professional Therapy needed, Engage in regular therapy sessions to explore underlying issues and develop coping strategies.",
            "Critical concerns. Major mental health struggles that impede daily functioning, relationships, and work or academic responsibilities. Professional help, such as therapy or counseling, is strongly recommended, you may benefit from a solid support network to address the challenges you face in day-to-day life."
        ])
        return CommentOnAssessment1.GetComment[PickComment]
            break;

        case (range <= 15 && range >= 11):
        const CommentOnAssessment2 = new CommentOnAssessment([
            "Significant challenges. Presence of noticeable mental health difficulties, which may point toward underlying conditions like anxiety, depression, or other disorders. You may not find relief from typical coping strategies and may benefit greatly from seeking a professional evaluation. Therapy or counseling can be instrumental in addressing these issues and improving your quality of life.",
            "Significant challenges. Possible underlying conditions requiring professional help. Medication Consultation needed, Consider speaking with a psychiatrist about medication options to manage symptoms.",
            "Moderate Distress. You may experience regular difficulties with mood or anxiety, impacting your quality of life and relationships. You may not find relief from typical coping strategies and may benefit greatly from seeking a professional evaluation. Therapy or counseling can be instrumental in addressing these issues and improving your quality of life.",
        ])
        return CommentOnAssessment2.GetComment[PickComment]   
            break;

        case (range <= 20 && range >= 16):
        const CommentOnAssessment3 = new CommentOnAssessment([
            "Moderate issues You may experience periods of emotional distress, mood swings, or stress that affect your overall well-being. Support from a counselor or therapist can be helpful in addressing moderate symptoms and building resilience.",
            "Moderate issues. Coping strategies may be beneficial. You need a Self-Care Routine, establish a daily self-care routine, including mindfulness, exercise, and healthy eating.",
            "Mild Distress. You might have some symptoms of stress or anxiety, but can generally manage daily tasks and maintain relationships.Establish a daily self-care routine, including mindfulness, exercise, and healthy eating."
        ])
        return CommentOnAssessment3.GetComment[PickComment]   
            break;

        case (range <= 25 && range >= 21):
        const CommentOnAssessment4 = new CommentOnAssessment([
            "Some difficulties. You may encounter periodic mental health challenges, Though your well-being is mostly intact, you could enhance it further by building awareness and engaging in regular self-care. Minor adjustments, like stress management techniques or mindfulness practices, may prevent these issues from intensifying.",
            "Some difficulties in health. Awareness and self-care can aid improvement. Social Connections needed, Strengthen relationships and reach out to friends or family for support and connection.",
            "Stable. You demonstrate a balanced emotional state with occasional challenges but has effective coping strategies in place. Minor adjustments, like stress management techniques or mindfulness practices, may prevent these issues from intensifying."
        ])
        return CommentOnAssessment4.GetComment[PickComment] 
            break;

        case (range <= 30 && range >= 26):
        const CommentOnAssessment5 = new CommentOnAssessment([
            "Fairly stable. You reflect a generally balanced mental state, though occasional stressors or life events may temporarily affect well-being. You can navigate daily challenges without significant impact on your mental health, though may experience some stress. Engaging in self-care practices and maintaining a support system can help manage occasional difficulties effectively.",
            "Fairly stable. Occasional stressors may affect well-being. Focus on building Stress Management Techniques, Incorporate stress-reducing practices like yoga, meditation, or deep breathing exercises.",
            "Good Mental Health. You exhibit resilience and a positive outlook, effectively managing stress and maintaining relationships. Engaging in self-care practices and maintaining a support system can help manage occasional difficulties effectively."
        ])
        return CommentOnAssessment5.GetComment[PickComment]   
            break;

        case (range <= 35 && range >= 31):
        const CommentOnAssessment6 = new CommentOnAssessment([
            "Good mental health, Minor challenges present but manageable. Journaling can help. Start a journaling practice to process emotions and reflect on positive experiences.",
            "Good mental health. You enjoy overall mental stability, facing only minor challenges that are well within your coping abilities. You can address stressors constructively, utilizing strategies that help maintain your mental balance. Some proactive self-care and resilience-building activities may be useful.",
            "Very Good Mental Health. You show strong emotional well-being, with healthy coping mechanisms and a supportive social network.Start a journaling practice to process emotions and reflect on positive experiences."
        ])
        return CommentOnAssessment6.GetComment[PickComment]    
            break;

        case (range <= 40 && range >= 36):
        const CommentOnAssessment7 = new CommentOnAssessment([
            "Excellent Mental Health. You are thriving, demonstrating self-awareness, emotional intelligence, and proactive mental wellness strategies. Create achievable personal and professional goals to foster a sense of purpose and accomplishment.",
            "Strong mental health. Resilient to stress with effective coping strategies. Set Goals, Create achievable personal and professional goals to foster a sense of purpose and accomplishment.",
            "Strong mental health. You show high resilience and the ability to navigate stress with effective coping skills. "
        ])
        return CommentOnAssessment7.GetComment[PickComment]    
            break;

        case (range <= 45 && range >= 41):
        const CommentOnAssessment8 = new CommentOnAssessment([
            "Very good mental health. You are well-adjusted, emotionally balanced, and capable of handling various challenges with confidence.Individual possesses a strong sense of self, exhibits healthy relationships, and have a positive outlook and likely to thrive with minimal intervention or support.",
            "Very good mental health. Well-adjusted and capable of handling challenges. Volunteer in Works, Engage in community service or volunteer opportunities to enhance well-being through helping others.",
            "Volunteer Work - Engage in community service or volunteer opportunities to enhance well-being through helping others."
        ])
        return CommentOnAssessment8.GetComment[PickComment]    
            break;

        case (range <= 50 && range >= 46):
         const CommentOnAssessment9 = new CommentOnAssessment([
            "Exceptional Mental Health. You are not only thriving personally but may also positively impact others, exhibiting profound well-being and life fulfillment. Share your knowledge and experience by mentoring others",
            "Excellent mental health. You are thriving and exhibiting optimal functioning. Engage in Mentorship or Teaching, Share your knowledge and experience by mentoring others, which can reinforce your own mental wellness.",
            "Excellent mental health. You reflect optimal functioning, with the individual demonstrating high levels of resilience, adaptability, and emotional intelligence, thriving both mentally and emotionally, using effective strategies to maintain this state. Your well-being is robust, and you show a natural capacity to excel in personal and professional settings."
         ])
         return CommentOnAssessment9.GetComment[PickComment]   
            break;
    
        default:
            return "error getting comment"
            break;
    }

}

export {GeneralMentalAssessment}