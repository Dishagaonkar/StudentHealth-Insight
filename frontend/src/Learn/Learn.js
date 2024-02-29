import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FilteredList from '../FilteredList';

const backgroundStyle = {
  backgroundColor: '#eeeeee', 
}

const cardStyle = {
  backgroundColor: '#A2D9CE', 
  minHeight: '500px',
}

const disclaimer2Style = { 
  padding: '10px', 
  marginTop: '20px', 
  backgroundColor: '#367EB6'
}

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
}

function Disclaimer2() {
  return (
    <Card style={disclaimer2Style}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}><h1>DISCLAIMER</h1></Card.Title>
        <Card.Text style={{color: 'white'}}>
        <h3>We cannot provide an official diagnosis. If your are experiencing 
        symptoms, please SEE A MEDICAL PROFESSIONAL for more information!
        </h3>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function Footer() {
  return (
    <Card style={footerStyle}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>References</Card.Title>
        <Card.Text style={{color: 'white'}}>
        Centers for Disease Control and Prevention. CDC, https://www.cdc.gov/.
        <br/>"Common Illnesses." Princeton University Health Services, https://uhs.princeton.edu/health-resources/common-illnesses.
        <br/>"Health Issues Among College Students in the US." Statista, https://www.statista.com/statistics/826999/health-issues-among-college-students-us/.
        <br/>Mayo Clinic. Mayo Clinic, https://www.mayoclinic.org/.
        <br/>MedlinePlus. MedlinePlus, https://medlineplus.gov.
        <br/>"US College Student Conditions." Statista, https://www.statista.com/statistics/1126483/us-college-student-conditions/.
        <br/>WebMD. WebMD, https://www.webmd.com/.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Learn = () => {
  const data = [
    {
      id: 0,
      name: 'Common Cold',
      type: ['Respiratory', 'Viral'],
      symptoms: ['Cough', 'Fever', 'Nasal Congestion', 'Runny Nose', 'Sneezing', 'Sore Throat'],
      description: '',
    },
    {
      id: 1,
      name: 'Influenza (The Flu)',
      type: ['Respiratory', 'Viral'],
      symptoms: ['Chills', 'Cough', 'Diarrhea', 'Fatigue', 'Fever', 'Headaches', 'Muscle/Body Aches', 'Nasal Congestion', 'Runny Nose', 'Sore Throat', 'Vomiting'],
      description: '',
    },
    {
      id: 2,
      name: 'Coronavirus Disease (COVID-19)',
      type: ['Respiratory', 'Viral'],
      symptoms: ['Chills', 'Cough', 'Diarrhea', 'Fatigue', 'Fever', 'Headaches', 'Loss of Taste/Smell', 'Muscle/Body Aches', 'Nasal Congestion', 'Nausea', 'Runny Nose', 'Shortness of Breath', 'Sore Throat', 'Vomiting'],
      description: '',
    },
    {
      id: 3,
      name: 'Respiratory Syncytial Virus Infection (RSV)',
      type: ['Respiratory','Viral'],
      symptoms: ['Cough', 'Decrease in Appetite', 'Fever', 'Runny Nose', 'Sneezing', 'Wheezing'],
      description: '',
    },
    {
      id: 4,
      name: 'Anxiety',
      type: ['Mental Condition'],
      symptoms: ['Fatigue', 'Feeling Fear', 'Feeling Irritable', 'Feeling Restless', 'Headaches', 'Muscle Tension/Knots', 'Stomach Pain', 'Trouble Concentrating', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 5,
      name: 'Seasonal Allergies',
      type: ['Allergen', 'Chronic'],
      symptoms: ['Cough', 'Headaches', 'Nasal Congestion', 'Puffiness', 'Runny Nose', 'Skin Irritation', 'Sneezing'],
      description: '',
    },
    {
      id: 6,
      name: 'Allergic Reaction',
      type: ['Allergen', 'Chronic'],
      symptoms: ['Anaphylaxis', 'Cough', 'Dizziness', 'Fainting', 'Increased Heart Rate', 'Itchy Throat/Mouth', 'Nasal Congestion', 'Nausea', 'Puffiness', 'Runny Nose', 'Shortness of Breath', 'Skin Irritation', 'Sneezing', 'Sore Throat', 'Stomach Pain', 'Swelling', 'Vomiting', 'Watery Eyes', 'Wheezing'],
      description: '',
    },
    {
      id: 7,
      name: 'Insomnia',
      type: ['Chronic', 'Sleep Disorder'],
      symptoms: ['Fatigue', 'Feeling Irritable', 'Trouble Concentrating', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 8,
      name: 'Narcolepsy',
      type: ['Sleep Disorder'],
      symptoms: ['Hallucinations', 'Over Sleeping', 'Sleep Paralysis', 'Temporary Loss of Muscle Tone', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 9,
      name: 'Depression',
      type: ['Mental Condition'],
      symptoms: ['Changes to Appetite', 'Fatigue', 'Feeling Irritable', 'Feeling Sad', 'Headaches', 'Lack of Interest in Normal Activities', 'Muscle/Body Aches', 'Over Sleeping', 'Stomach Pain', 'Suicidal Thoughts', 'Trouble Concentrating', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 10,
      name: 'Restless Legs Syndrome (RLS)',
      type: ['Neurological', 'Sleep Disorder'],
      symptoms: ['Fatigue', 'Feeling Restless', 'Involuntary Limb Movements', 'Itching', 'Tingling', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 11,
      name: 'Sleep Paralysis',
      type: ['Sleep Disorder'],
      symptoms: ['Feeling Fear', 'Feeling Panic', 'Paralysis', 'Sleep Paralysis', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 12,
      name: 'Bulimia Nervosa',
      type: ['Eating Disorder', 'Mental Condition'],
      symptoms: ['Changes to Appetite', 'Vomiting', 'Weight Loss'],
      description: '',
    },
    {
      id: 13,
      name: 'Anorexia Nervosa',
      type: ['Eating Disorder', 'Mental Condition'],
      symptoms: ['Weight Loss'],
      description: '',
    },
    {
      id: 14,
      name: 'Chlamydia',
      type: ['Sexually Transmitted Disease'],
      symptoms: ['Burning', 'Discharge'],
      description: '',
    },
    {
      id: 15,
      name: 'Gonorrhea',
      type: ['Sexually Transmitted Disease'],
      symptoms: ['Burning' , 'Discharge', 'Rash' ,'Sores'],
      description: '',
    },
    {
      id: 16,
      name: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
      type: ['Mental Condition'],
      symptoms: ['Lack of Focus', 'Trouble Concentrating'],
      description: '',
    },
    {
      id: 17,
      name: 'Obsessive-Compulsive Disorder (OCD)',
      type: ['Mental Condition'],
      symptoms: ['Compulsions', 'Obsessive'],
      description: '',
    },
    {
      id: 18,
      name: 'Bipolar Disorder',
      type: ['Mental Condition'],
      symptoms: ['Manic Episodes', 'Mood Swings'],
      description: '',
    },
    {
      id: 19,
      name: 'Bone Fracture',
      type: ['Physical'],
      symptoms: ['Pain', 'Swelling'],
      description: '',
    },
    {
      id: 20,
      name: 'Bone Sprain',
      type: ['Physical'],
      symptoms: ['Bruising', 'Pain', 'Swelling'],
      description: '',
    },
    {
      id: 21,
      name: 'Tendinitis',
      type: ['Physical'],
      symptoms: ['Pain', 'Swelling', 'Tenderness'],
      description: '',
    },
    {
      id: 22,
      name: 'Anterior Cruciate Ligament (ACL) Tear',
      type: ['Physical'],
      symptoms: ['Loss of Motion', 'Pain', 'Popping of Knee' , 'Swelling'],
      description: '',
    },
    {
      id: 23,
      name: 'Urinary Tract Infection (UTI)',
      type: ['Infection'],
      symptoms: ['Discolored Urine', 'Pain'],
      description: '',
    },
    {
      id: 24,
      name: 'Sinusitis (Sinus Infection)',
      type: ['Infection'],
      symptoms: ['Nasal Congestion', 'Pain', 'Runny Nose', 'Tenderness'],
      description: '',
    },
    {
      id: 25,
      name: 'Gastritis',
      type: ['Inflammation'],
      symptoms: ['Nausea', 'Pain', 'Vomiting'],
      description: '',
    },
    {
      id: 26,
      name: 'Diarrhea',
      type: ['Infection', 'Viral'],
      symptoms: ['Bloating', 'Diarrhea', 'Fever',  'Nausea', 'Vomiting'],
      description: '',
    },
    {
      id: 27,
      name: 'Food Poisoning',
      type: ['Foodborne Illness'],
      symptoms: ['Diarrhea', 'Fever' , 'Headaches' , 'Vomiting'],
      description: '',
    },
    {
      id: 28,
      name: 'Gastroenteritis (Stomach Flu)',
      type: ['Infection'],
      symptoms: ['Cramps', 'Fever', 'Nausea ', 'Vomiting'],
      description: '',
    },
    {
      id: 29,
      name: 'Bronchitis',
      type: ['Inflammation'],
      symptoms: [ 'Chills', 'Cough',  'Fatigue'],
      description: '',
    },
    {
      id: 30,
      name: 'Pneumonia',
      type: ['Inflammation'],
      symptoms: ['Chills', 'Cough', 'Fatigue', 'Fever', 'Nausea', 'Vomiting'],
      description: '',
    },
    {
      id: 31,
      name: 'Mononucleosis (Epstein-Barr Virus) (Mono)',
      type: ['Viral'],
      symptoms: ['Fever', 'Headaches', 'Sore Throat', 'Swelling'],
      description: '',
    },
    {
      id: 32,
      name: 'Shingles',
      type: ['Infection', 'Viral'],
      symptoms: ['Itching', 'Pain', 'Rash'],
      description: '',
    },
    {
      id: 33,
      name: 'Varicella (Chicken Pox)',
      type: ['Viral'],
      symptoms: ['Bumps' , 'Redness','Fever', 'Headaches', 'Rash', 'Scabs'],
      description: '',
    },
    {
      id: 34,
      name: 'Migraine',
      type: ['Physical'],
      symptoms: ['Constipation', 'Headaches', 'Mood Swings', 'Pain'],
      description: '',
    },
    {
      id: 35,
      name: 'Irritable Bowel Syndrome (IBS)',
      type: ['Intestinal Disorder', 'Physical'],
      symptoms: ['Abnormal Bowel Movement' , 'Pain'],
      description: '',
    },
    {
      id: 36,
      name: 'Asthma',
      type: ['Respiratory'],
      symptoms: ['Chest Tightness', 'Shortness of Breath', 'Wheezing'],
      description: '',
    },
    {
      id: 37,
      name: 'Diabetes (Type I & Type II)',
      type: ['Chronic'],
      symptoms: ['Fatigue', 'Feeling Thirsty', 'Frequent Urination' ,  'Weight Loss'],
      description: '',
    },
    {
      id: 38,
      name: 'Pelvic Inflammatory Disease (PID)',
      type: ['Infection', 'Reproductive'],
      symptoms: ['Bleeding', 'Pain'],
      description: '',
    },
    {
      id: 39,
      name: 'Mumps',
      type: ['Viral'],
      symptoms: ['Fatigue', 'Fever', 'Headaches', 'Pain', 'Swelling'],
      description: '',
    },
    {
      id: 40,
      name: 'Acne',
      type: ['Skin', 'Physical'],
      symptoms: ['Blackheads', 'Lumps',  'Papules', 'Pimples',  'Skin Irritation', 'Whiteheads'],
      description: '',
    },
    {
      id: 41,
      name: 'Atopic Dermatitis (Eczema)',
      type: ['Skin'],
      symptoms: ['Bumps', 'Dry Skin', 'Itching', 'Rash' ],
      description: '',
    },
    {
      id: 42,
      name: 'Conjunctivitis (Pink Eye)',
      type: ['Inflammation'],
      symptoms: ['Itching', 'Redness', 'Tearing'],
      description: '',
    },
    {
      id: 43,
      name: 'Dental Cavities (Tooth Decay)',
      type: ['Dental'],
      symptoms: ['Pain', 'Toothache'],
      description: '',
    },
    {
      id: 44,
      name: 'Gingivitis',
      type: ['Dental'],
      symptoms: ['Swelling', 'Tenderness'],
      description: '',
    },
    {
      id: 45,
      name: 'Addiction (Substance Abuse)',
      type: ['Mental Condition'],
      symptoms: ['Riskier Behavior', 'Substance Abuse', 'Trouble Concentrating', 'Withdrawal'],
      description: '',
    },
    {
      id: 46,
      name: 'Concussion',
      type: ['Physical'],
      symptoms: ['Blurry Vision', 'Headaches', 'Nausea', 'Vomiting'],
      description: '',
    },
    {
      id: 47,
      name: 'Gastroesophageal Reflux Disease – GERD (Acid Reflux)',
      type: ['Stomach'],
      symptoms: ['Chest Pain' , 'Cough', 'Lumps'],
      description: '',
    },
    {
      id: 48,
      name: 'Hypertension (High Blood Pressure)',
      type: ['Blood'],
      symptoms: ['Headaches', 'Nosebleeds', 'Shortness of Breath'],
      description: '',
    },
    {
      id: 49,
      name: 'High Cholesterol',
      type: ['Blood'],
      symptoms: ['Asymptomatic (no symptoms)'],
      description: '',
    },
    {
      id: 50,
      name: 'Ear Infections',
      type: ['Infection'],
      symptoms: ['Headaches', 'Hearing loss' , 'Pain'],
      description: '',
    },
    {
      id: 51,
      name: 'Genital Herpes',
      type: ['Sexually Transmitted Disease', 'Viral'],
      symptoms: ['Bumps', 'Discharge', 'Itching', 'Pain'],
      description: '',
    },
    {
      id: 52,
      name: 'Tonsillitis',
      type: ['Inflammation'],
      symptoms: ['Bad Breath', 'Fever', 'Headaches', 'Stomach Pain',  'Swelling'],
      description: '',
    },
    {
      id: 53,
      name: 'Tuberculosis (TB)',
      type: ['Respiratory'],
      symptoms: ['Cough', 'Fatigue', 'Fever'],
      description: '',
    },
    {
      id: 54,
      name: 'Meningitis',
      type: ['Inflammation', 'Infection'],
      symptoms: ['Fever', 'Headaches', 'Nausea' , 'Sensitivity', 'Vomiting'],
      description: '',
    },
    {
      id: 55,
      name: 'Anemia',
      type: ['Blood'],
      symptoms: ['Chest Pain', 'Fatigue', 'Headaches', 'Jaundice'],
      description: '',
    },
    {
      id: 56,
      name: 'Hepatitis A',
      type: ['Infection'],
      symptoms: ['Fatigue', 'Fever', 'Itching', 'Jaundice', 'Nausea' , 'Vomiting'],
      description: '',
    },
    {
      id: 57,
      name: 'Hepatitis B',
      type: ['Infection'],
      symptoms: ['Fatigue', 'Fever', 'Itching', 'Jaundice', 'Nausea', 'Vomiting'],
      description: '',
    },
    {
      id: 58,
      name: 'Inflammatory Bowel Disease (IBD)',
      type: ['Inflammation'],
      symptoms: ['Bleeding' , 'Diarrhea', 'Pain', 'Weight Loss' ],
      description: '',
    },
    {
      id: 59,
      name: 'Pregnancy',
      type: ['Reproductive'],
      symptoms: ['Missed Period', 'Nausea', 'Pain', 'Vomiting'],
      description: '',
    },
    {
      id: 60,
      name: 'Hives',
      type: ['Skin'],
      symptoms: ['Itching', 'Welts'],
      description: '',
    },
    {
      id: 61,
      name: 'Plantar Warts',
      type: ['Skin', 'Viral'],
      symptoms: ['Bumps', 'Pain'],
      description: '',
    },
    {
      id: 62,
      name: 'Lyme Disease',
      type: ['Chronic'],
      symptoms: ['Chills', 'Dizziness', 'Fatigue', 'Fever', 'Headaches', 'Joint/Muscle Pain', 'Numbness', 'Pain', 'Shortness of Breath', 'Skin Irritation', 'Stiffness', 'Swelling'],
      description: '',
    },
    {
      id: 63,
      name: 'Celiac Disease',
      type: ['Autoimmune', 'Chronic'],
      symptoms: ['Anemia', 'Bloating', 'Constipation', 'Diarrhea', 'Nausea', 'Pain', 'Skin Irritation', 'Stomach Pain', 'Ulcers', 'Weight Loss'],
      description: '',
    },
    {
      id: 64,
      name: 'Fibromyalgia',
      type: ['Chronic', 'Physical'],
      symptoms: ['Aching', 'Bloating', 'Burning', 'Constipation', 'Depression', 'Diarrhea', 'Fatigue', 'Frequent Urination', 'Headaches', 'Numbness', 'Pain', 'Stiffness', 'Stomach Pain', 'Trouble Concentrating', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 65,
      name: 'Burns',
      type: ['Physical'],
      symptoms: ['Blisters', 'Numbness', 'Pain', 'Redness', 'Swelling'],
      description: '',
    },
    {
      id: 66,
      name: 'Panic Attack',
      type: ['Mental Condition'],
      symptoms: ['Chills', 'Dizziness', 'Feeling Fear', 'Feeling Panic', 'Hot Flashes', 'Nausea', 'Numbness', 'Pain', 'Shaking', 'Shortness of Breath', 'Sweating'],
      description: '',
    },
    {
      id: 67,
      name: 'Autism Spectrum Disorder',
      type: ['Chronic', 'Developmental'],
      symptoms: ['Attention to Detail', 'Avoids Eye Contact', 'Feeling Fear', 'Feeling Irritable', 'Feeling Restless', 'Seizures', 'Social Anxiety', 'Trouble Concentrating', 'Trouble with Change'],
      description: '',
    },
    {
      id: 68,
      name: 'Sleep Apnea',
      type: ['Chronic', 'Sleep Disorder'],
      symptoms: ['Depression', 'Fatigue', 'Frequent Urination', 'Headaches', 'Snoring', 'Sore Throat', 'Sweating', 'Trouble Concentrating', 'Trouble Sleeping'],
      description: '',
    },
    {
      id: 69,
      name: 'Impetigo',
      type: ['Bacterial', 'Infection', 'Skin'],
      symptoms: ['Blisters', 'Skin Irritation'],
      description: '',
    },
    {
      id: 70,
      name: 'Lupus',
      type: ['Autoimmune', 'Chronic'],
      symptoms: ['Anemia', 'Blood Clotting', 'Fatigue', 'Fever', 'Hair Loss', 'Joint/Muscle Pain', 'Pain', 'Skin Irritation', 'Sores'],
      description: 'Lupus is a chronic autoimmune disease that affects any/all parts of the body. Symptoms vary from person to person and come in flares (meaning there are moments where they worsen and moments where they are relieved). While there is no way cure lupus, treatment options provided by a medical professional can help alleviate symptoms, prevent flares, and prevent other health problems/complications that could arise.',
    },
    {
      id: 71,
      name: 'Tourette Syndrome',
      type: ['Chronic', 'Neurological'],
      symptoms: ['Tics'],
      description: 'Tourette syndrome is a chronic neurological condition that causes people to have tics. There are two different types of tics that both range in severity. Motor tics are body movements, such as eye blinking, body twitches, or jerking of a limb. Vocal tics are sounds one makes, including humming, throat clearing, or yelling a certain word/phrase. Simple tics affect a few parts of the body. While complex tics affect different parts of the body and can often have a pattern. There is no treatment for Tourette syndrome, however, there are different treatment options available to help manage tics.',
    },
    {
      id: 72,
      name: 'Carpal Tunnel Syndrome / Median Nerve Compression',
      type: ['Chronic'],
      symptoms: ['Burning', 'Loss of Motor Functions', 'Numbness'],
      description: 'Carpal tunnel syndrome, also known as median nerve compression, is a chronic condition that causes numbness or weakness in one’s hand. It happens due to pressure on the median nerve that controls movement and feeling in most of your fingers. It is caused by repetitive movements, such as typing. Women are much more likely than men to develop carpal tunnel, however it can affect anyone. There are a multitude of treatments available to help with symptom management, including lifestyle changes, exercises, medication, and surgery.',
    },
    {
      id: 73,
      name: 'Sun Exposure (Sunburn)',
      type: ['Skin', 'Physical'],
      symptoms: ['Blisters', 'Fatigue', 'Fever', 'Headaches', 'Nausea', 'Pain', 'Redness', 'Skin Irritation', 'Swelling'],
      description: 'Sun exposure, more commonly known as sunburn, is physical skin damage from overexposure to the sun without protective gear (clothes, umbrella, sunscreen). Constant overexposure can lead to wrinkling, age spots, and most dangerous an increased risk of skin cancer. There is no quick treatment for sunburn. It must take time to heal, but there are tools for pain management (cool baths, medications, plenty of fluids, avoiding further sun exposure). If there is blistering, lightly cover/bandage to prevent infection. Breaking the blisters will slow the healing process and increase the risk of infection.',
    },
    {
      id: 74,
      name: 'Hypoglycemia',
      type: ['Chronic'],
      symptoms: ['Dizziness', 'Fainting', 'Fatigue', 'Headaches', 'Hunger', 'Numbness', 'Seizures', 'Sweating', 'Trouble Sleeping'],
      description: 'Hypoglycemia is a chronic condition caused by low blood sugar. Blood sugar is measured by the amount of glucose (main energy supply for the body) in the blood. It is most common with people who have diabetes. Those without diabetes might have hypoglycemia due to certain medication, certain diseases, malnutrition, substance abuse, or hormone issues. There are many options on how to treat symptoms and maintain a healthy blood sugar, so speak to a medical professional to find the option that is best for you.',
    },
    {
      id: 75,
      name: 'Bacterial Vaginosis',
      type: ['Bacterial', 'Infection'],
      symptoms: ['Burning', 'Itching', 'Pain', 'Stomach Pain'],
      description: 'Bacterial vaginosis is a vaginal infection caused by changes in the normal balance of vaginal bacteria. It is very common and rarely leads to other health issues, but it can cause issues with pregnancy (preterm birth, early rupture, miscarriage). It usually get worse without treatment, but it is easily treatable and options can be provided to you by a medical professional.',
    },
    {
      id: 76,
      name: 'Scabies',
      type: ['Infestation', 'Skin'],
      symptoms: ['Blisters', 'Itching', 'Skin Irritation', 'Sores'],
      description: 'Scabies is a skin infestation by a specific type of mite. These microscopic mites burrow in the top layer of your skin. They live and lay eggs here causing an itchy pimple-like rash. It spreads through direct skin-to-skin contact, and can spread rapidly in crowded situations. Symptoms can begin as long as 4 to 8 weeks after being infected, but for those who have had it before it can be as quick as 1 to 4 days. With or without symptoms, you are still able to spread the infection. There is a treatment for scabies, but you will need to see a medical professional to be prescribed the medication.',
    },
    {
      id: 77,
      name: 'Hypothyroidism',
      type: ['Chronic', 'Hormonal'],
      symptoms: ['Constipation', 'Depression',  'Dry Skin' , 'Fatigue', 'Hair Loss', 'High Cholesterol', 'Muscle/Body Aches', 'Pain', 'Stiffness', 'Swelling', 'Weight Gain'],
      description: 'Hypothyroidism is a common chronic, hormonal condition, in which the thyroid gland does not make enough of the thyroid hormone. This can cause certain body processes to slow down, making your metabolism slower and creating less energy for your body. Hypothyroidism  can be treated. Although it usually takes time to find the correct dosage, a medical professional can prescribe medications that produce this hormone for your body, getting rid of the symptoms. However, it is important to follow your doctor’s directions, because missing or stopping the medication can cause symptoms to return.',
    },
    {
      id: 78,
      name: 'Rosacea',
      type: ['Skin'],
      symptoms: ['Bumps', 'Burning',  'Dry Skin', 'Itching', 'Redness', 'Sensitivity', 'Swelling', 'Vision Issues'],
      description: 'Rosacea is a skin condition where your skin looks red/flushed and can also look like small bumps with pus (similar to acne). There are four types of rosacea: erythematotelangiectatic (face redness), papulopustular (similar to acne), phymatous (thick/scarred skin), and ocular (affects the eyes).It can affect anyone and can be harder to diagnose for people with darker skin. It can be easily managed through medication and other treatments offered by a medical professional.',
    },
    {
      id: 79,
      name: 'Hemorrhoids',
      type: ['Inflammation'],
      symptoms: ['Bumps', 'Itching', 'Pain'],
      description: 'Hemorrhoids is when veins lining the anal canal become inflamed/swollen. It can happen to anyone and is very common. It is caused by increased pressure on the lower body, such as straining on the toilet, constipation, diarrhea, obesity, pregnancy, childbirth, and lifting heavy objects. Most cases are mild and can go away on their own. However, if symptoms are more severe, then it could lead to other complications (prolases & thrombosis) which would need medical attention.',
    },
    {
      id: 80,
      name: 'Diverticulitis',
      type: ['Infection', 'Inflammation'],
      symptoms: ['Constipation', 'Diarrhea', 'Fever', 'Nausea', 'Pain', 'Tenderness', 'Vomiting'],
      description: 'Diverticulitis is an inflammatory condition, where pouches that can form in the intestines (diverticula) become inflamed/infected. It ranges in severity and there are four types. Acute is easily treatable, while chronic has treatments but is reoccuring. Uncomplicated is the most common type and is also easily treatable. Complicated can cause other inflammation problems, such as a rupture. Treatment options range from rest and lots of liquids to surgery, so speak to a medical professional to see which options are needed for you.',
    },
    {
      id: 81,
      name: 'Ovarian Cysts',
      type: ['Reproductive'],
      symptoms: ['Aching', 'Bloating', 'Frequent Urination', 'Nausea', 'Pain', 'Pressure', 'Swelling'],
      description: 'Ovarian cysts are pockets that are either fluid-filled or semi-solid on your ovaries. It is very common and most people do not exhibit any symptoms or even know they are there. A cysts is only dangerous if it is persistent, increases in size, or begins to hurt. Sometimes cysts rupture, this can just cause mild discomfort or it can be a medical emergency. The only treatment is to be vigilant. It will either go away on its own or need surgery. Pain and other symptoms can be managed through medications prescribed by a medical professional.',
    },
    {
      id: 82,
      name: 'Testicular Torsion',
      type: ['Medical Emergency'],
      symptoms: ['Dizziness', 'Frequent Urination', 'Nausea', 'Pain', 'Redness', 'Stomach Pain', 'Swelling', 'Vomiting'],
      description: 'Testicular torsion is a medical emergency, where a testicle twists around and cuts off blood flow to itself. The lack of blood flow will cause pain and swelling. Immediate treatment is necessary to save the testicle, prevent infertility, and other complications. While the condition itself is rare, most cases will need surgery to fix the testicular torsion.',
    },
    {
      id: 83,
      name: 'Peptic Ulcers',
      type: ['Gastric'],
      symptoms: ['Bloating', 'Burping', 'Decrease in Appetite', 'Nausea', 'Vomiting', 'Weight Loss'],
      description: 'A peptic ulcer is when there are open sores on the lining of the upper intestine or stomach. It is caused by bacteria, certain pain relief medications, and substance abuse which cause stomach acids to eat away at the protective layer of the digestive tract. It ranges in severity from no symptoms to mild discomfort to internal bleeding that needs medical attention. There are two types: gastric (stomach) and duodenal (top of small intestine). Some ulcers heal on their own, but without proper treatment they usually come back.',
    },
    {
      id: 84,
      name: 'Human Papillomavirus (HPV)',
      type: ['Infection', 'Sexually Transmitted Disease', 'Viral'],
      symptoms: ['Common Warts', 'Flat Warts', 'Genital Warts', 'Plantar Warts', 'Skin Irritation'],
      description: 'Human papillomavirus, more commonly known as HPV, is a sexually transmitted viral infection. It is very common and most people don’t show any symptoms. It is not just one virus; there are over 100 different types, some of which are much more dangerous than others. High-risk versions of the virus can cause cervical cancer, while low-risk strains might cause genital warts. Some people with HPV might not even show symptoms and the infection could go away without treatment. Treatments available range greatly depending on the severity and strain of HPV. Speak with a medical professional to see which option is best for you.',
    },
    {
      id: 85,
      name: 'Epilepsy',
      type: ['Neurological'],
      symptoms: ['Seizures'],
      description: 'Epilepsy is a neurological condition where unusual electrical activity in the brain causes seizures. The seizures themselves are typically not dangerous, but the situations you could be in are (driving a vehicle, operating heavy machinery, hitting your head). The exact cause of epilepsy is unknown, however with medical help there are treatments (diet, medications, medical devices, surgery) available to keep seizures under control.',
    },
    {
      id: 86,
      name: 'Gout',
      type: ['Chronic', 'Inflammation'],
      symptoms: ['Heat on Skin', 'Pain', 'Redness', 'Swelling'],
      description: 'Gout is a common chronic inflammatory arthritis. It is very painful and usually only affects one joint at a time (typically the big toe joint). It is caused when there is too much uric acid in one’s body. Symptoms may flare up due to different reasons. There is no cure for gout and it must be diagnosed by a medical professional. However, gout can be properly treated and managed through medications as well as some lifestyle changes (healthy diet, limiting alcohol, be physically active, healthy weight loss, etc).',
    },
    {
      id: 87,
      name: 'Coronary Artery Disease',
      type: ['Cardiovascular', 'Heart Disease'],
      symptoms: ['Aching', 'Burning', 'Numbness', 'Pressure'],
      description: 'Coronary artery disease is the most common type of heart disease (and leading cause of death) in the United States. It is when plaque builds up inside arteries that supply blood to the heart. It can take a while to be dangerous, but without proper attention it can be fatal. Coronary artery disease becomes more likely with age, if it runs in your family, or with other risk factors (high cholesterol, high blood pressure, smoking/vaping, diabetes, autoimmune diseases, HIV, obesity, substance abuse, sleeping disorders, etc). Coronary artery disease can be treated through medications, procedures, and lifestyle changes (specified diet, stop smoking, be active, stay at a healthy weight, stress management, etc). However, the best thing to do is focus on prevention, such as regular doctor check-ups, maintaining a health weight, avoiding smoking, limiting alcohol, staying active, reducing stress, and diet (lots of fiber-rich foods and fatty fish; avoid salt and trans fats).',
    },
    {
      id: 88,
      name: 'Endometriosis',
      type: ['Tissue Disease'],
      symptoms: ['Back Pain', 'Constipation', 'Cramps', 'Diarrhea', 'Fatigue', 'Heavy Periods', 'Infertility Issues'],
      description: 'Endometriosis is a tissue disease, when a tissue begins to grow outside of the uterus. It acts the same as the tissue inside of the uterus, so during a menstrual cycle (your period) it breaks apart and bleeds. However, because it is on the outside of the uterus, it has nowhere to go. This makes the surrounding areas can be swollen, inflamed, or have scar tissue/lesions. There are four different types depending on the part of the body that it affects, and four stages of the disease. Lifestyle changes (healthy diet, regular exercise, stress management, etc) can help reduce the pain. Experts are not quite sure what causes endometriosis, but without medical intervention it could worsen and cause severe complications, such as pain that affects daily life, mental health issues, ovarian cancer, and infertility.',
    },
    {
      id: 89,
      name: 'Schizophrenia',
      type: ['Chronic', 'Mental Condition'],
      symptoms: ['Delusions', 'Hallucinations', 'Lack of Interest in Normal Activities', 'Movement Disorders', 'Trouble Concentrating'],
      description: 'Schizophrenia is a chronic and severe mental disorder. It is not very common, but it affects the way a person thinks, acts, emotes, relates, and perceives reality. It is a type of psychosis where one cannot distinguish real from imaginary. First signs usually appear for men from late teens to early twenties and for women from early twenties and thirties. The periods of psychosis can last for days, wells, or even years. It is unclear what the exact cause is, but it affects all types of people. It is treated through a combination of medications and therapies, however it is an ongoing battle and can be very debilitating (can lead to substance abuse, issues with unemployment, financial problems, suicidal thoughts, and immense amounts of stress).',
    },
    {
      id: 90,
      name: 'Polycystic Ovary Syndrome (PCOS)',
      type: ['Chronic', 'Hormonal', 'Reproductive'],
      symptoms: ['Acne', 'Hair Loss', 'Mood Swings', 'Ovarian Cysts', 'Pain', 'Skin Tags', 'Weight Gain'],
      description: 'Polycystic ovary syndrome, also known as PCOS, is a chronic hormonal condition that affects the ovaries by causing normal reproductive hormones to be out of balance. It is one of the most common causes of infertility. Most people do not even know they have PCOS due to a lack of exhibiting symptoms. While the condition never goes away, the symptoms tend to get better after menopause, and there are treatments available to relieve symptoms and help with pregnancy. Actual symptoms vary, but the most common is irregular menstrual cycles (periods). Speak with a medical professional to learn and understand more about different treatment options (vary greatly depending on whether or not you are trying to get pregnant).',
    },
    {
      id: 91,
      name: 'Trichomoniasis',
      type: ['Sexually Transmitted Disease'],
      symptoms: ['Burning', 'Burning while Urinating', 'Frequent Urination', 'Genital Itching/Burning', 'Itching'],
      description: 'Trichomoniasis is a common STD. Oftentimes, people with trichomoniasis won’t display any symptoms, but without treatment the chances of getting/spreading other STDs greatly increases. Despite not displaying symptoms, anyone with this disease can spread it through contact between genitalia. Those who do display symptoms might not start to experience them until days or weeks after infection. Prescribed antibiotics from a medical professional should clear up the infection (good to wait 7-10 days and get tested again to avoid spreading the disease). To lower your risk of getting trichomoniasis use condoms, avoid douching, talk openly with partners you trust (ask if they have tested negative for STDs).',
    },
    {
      id: 92,
      name: 'Interstitial Cystitis',
      type: ['Bladder Syndrome', 'Chronic'],
      symptoms: ['Frequent Urination', 'Groin Pressure/Pain', 'Pain', 'Stomach Pain', 'Ulcers'],
      description: 'Interstitial cystitis is a chronic bladder condition. It makes it painful to hold your pee, so people with interstitial cystitis might have to pee up to 60 times a day. Symptoms greatly vary in severity and frequency, and sometimes they can even go away. If you are experiencing urinary pain for more than 6 weeks, a medical professional would have to rule out a multitude of other options before being able to diagnose you with interstitial cystitis and give you proper treatment options.',
    },
    {
      id: 93,
      name: 'Candidiasis (Yeast Infection)',
      type: ['Fungal', 'Infection'],
      symptoms: ['Burning while Urinating', 'Genital Itching/Burning', 'Pain', 'Skin Irritation', 'Swelling'],
      description: 'Candidiasis, more commonly known as a yeast infection, is very common and is caused by a fungus. It typically causes the vaginia and vulva to itch, swell, or even burn. In some cases, the swelling is so severe that it leads to sores. Both women and men can get yeast infections. Over-the-counter creams, medications, and suppositories are available to help clear up the infection. However, if symptoms become more severe, you might need a medication prescribed by a medical professional.',
    },
    {
      id: 94,
      name: 'Appendicitis',
      type: ['Infection', 'Medical Emergency'],
      symptoms: ['Constipation', 'Decrease in Appetite', 'Diarrhea', 'Fever', 'Nausea', 'Stomach Pain', 'Vomiting'],
      description: 'Appendicitis is a medical emergency, where one’s appendix becomes infected/inflamed. Surgical intervention is necessary, because if your appendix bursts then the infection could enter the bloodstream, which is deadly. It is caused when there is something blocking the appendix which allows bacteria to grow at an uncontrollable rate. It will start with a severe stomach pain (to the right of your belly button) and will get worse with movement. If you believe you have appendicitis, you should seek medical attention immediately.',
    },
    {
      id: 95,
      name: 'Liver Cirrhosis',
      type: ['Chronic', 'Liver Disease'],
      symptoms: ['Bleeding', 'Cramps', 'Decrease in Appetite', 'Fatigue', 'Fever', 'Hair Loss', 'Jaundice', 'Lowered Labido', 'Nausea', 'Stomach Pain', 'Swelling', 'Trouble Concentrating', 'Trouble Sleeping', 'Vomiting', 'Weight Loss'],
      description: 'Liver Cirrhosis is a chronic liver disease, where scar tissue slowly replaces healthy liver tissue. When the liver is damaged, it heals itself and creates scar tissue. If this happens often, then there will be too much scar tissue for the liver to function properly. It takes a long period of time to occur and is caused by liver problems or other diseases, such as alcohol abuse, fatty liver disease, Hepatitis B or C, or cryptogenic cirrhosis. Without proper care, complications, such as portal hypertension, varices, fluid buildup, liver cancer, and infections, could occur. To take the best possible care of your liver: eat a health diet, get vaccinated, be mindful of medications, and minimize (preferably end) alcohol consumption.',
    },
    {
      id: 96,
      name: 'Scoliosis',
      type: ['Chronic', 'Physical'],
      symptoms: ['Back Pain', 'Difficulty Breathing', 'Fatigue', 'Numbness', 'Pain', 'Stiffness', 'Uneven Shoulders/Hips', 'Visible Back Curve'],
      description: 'Scoliosis is a chronic spinal deformity (curve in your backbone). There is no way to prevent scoliosis, and there are four different types. The first is idiopathic scoliosis, meaning there is no known cause (80% of cases). The second is congenital scoliosis, which starts developing before one is born. Third there is neuromuscular scoliosis, which is caused by other disorders, such as spina bifida, cerebral palsy, or an injury to the spinal cord. Lastly, there is degenerative scoliosis, which is when disks and joints begin to wear out with age. For mild scoliosis, treatment might not be necessary. However, for more severe cases, treatment options include braces, spinal fusion surgery, or a spine and rib-based growing operation. Talk with a medical professional to learn more about these options.',
    },
    {
      id: 97,
      name: 'Myasthenia Gravis',
      type: ['Autoimmune', 'Chronic', 'Neuromuscular'],
      symptoms: ['Double Vision', 'Droopy Eyelids', 'Loss of Motor Functions', 'Shortness of Breath', 'Slurred Speech', 'Trouble Chewing/Swallowing', 'Weakness in Jaw/Throat'],
      description: 'Myasthenia gravis is a chronic autoimmune neuromuscular disease. It makes specific muscles become weakened after use. The muscle fatigue can vary and tends to get better with rest. It disrupts the signals between your nerves and muscles, making it difficult to move voluntarily sometimes. The exact cause is unknown but anyone can get myasthenia gravis. It is a treatable disease that becomes easier to manage over time. If you are experiencing symptoms, see a medical professional for tests to receive a proper diagnosis. They will be able to provide medication that can help with pain management. Some ways to take care of yourself with this illness is through good nutrition, proper exercise, rest, and knowing your triggers.',
    },
    {
      id: 98,
      name: 'Inguinal Hernia (Direct Hernia)',
      type: ['Abdominal', 'Physical'],
      symptoms: ['Aching', 'Groin Pressure/Pain', 'Stomach Pain', 'Swelling'],
      description: 'An inguinal hernia is when the tissue inside the abdomen sticks through the muscle (in a weak spot). Direct hernias can develop in adults due to a weakened spot in the abdominal wall, abdominal pressure, straining from activities or using the bathroom, pregnancy, and over coughing/sneezing. They can be mild or severe, so if you have abdominal or groin pain when coughing or lifting something heavy, then you should go see a medical professional for a physical exam. Those who are older, white, male, have chronic coughs or constipation, or do frequent strenuous activities are at a higher risk of developing a hernia. Hernias do not go away on their own, and usually get bigger over time. If there is little discomfort, then there is no need for immediate treatment, but it will need to be medically addressed at some point.',
    },
    {
      id: 99,
      name: 'Dengue Fever',
      type: ['Blood', 'Viral'],
      symptoms: ['Bleeding', 'Fatigue', 'Fever', 'Headaches', 'Joint/Muscle Pain', 'Nausea', 'Pain Behind Eyes', 'Skin Irritation', 'Vomiting'],
      description: 'Dengue fever is a painful and severe disease caused by any of the four dengue viruses. Most of the cases in the United States are from those who contracted the virus while traveling abroad. However, the number of cases in the U.S. has been on the rise. It is transmitted by an Aedes mosquito bite (bites an infected person, then bites an uninfected person). Symptoms typically begin within 4 to 6 days of infection and can last up to 10 days. Without proper attention, dengue fever can lead to serious complications. The most dangerous is dengue hemorrhagic fever which can cause circulatory system failure and lead to dengue shock syndrome (DSS), which is massive bleeding, shock, and then death. Dengue fever is diagnosed with a blood test and there is no specific medicine to treat it. You should avoid medications with aspirin, because they could make the bleeding worse. The best prevention is using mosquito repellents and other techniques (long sleeves, pants tucked into socks, etc.) in order to avoid mosquito bites. If you believe you have dengue fever, you should speak with a medical professional immediately.',
    },
    {
      id: 100,
      name: 'Pertussis (Whooping Cough)',
      type: ['Bacterial', 'Respiratory'],
      symptoms: ['Cough', 'Difficulty Breathing', 'Fever', 'Runny Nose', 'Vomiting'],
      description: 'Pertussis, more commonly known as whooping cough, is a very contagious respiratory illness that is caused by a bacteria called Bordetella pertussis. The bacteria attach to the upper respiratory system and release toxins that damage the airway. It spreads through the air when an infected person sneezes or coughs. Those infected are contagious from the start of symptoms (even mild ones) for at least 2 weeks. Early symptoms resemble a cold so it can be hard for medical professionals to diagnose. The best prevention from whooping cough is to get vaccinated and use basic health and hygiene practices. Pertussis can be severe and lead to other complications, so it is important to see a medical professional as soon as possible and take any antibiotics prescribed exactly as directed by the doctor.',
    },
  ];

  function Card1() {
    return (
      <Card>
        <Card.Body style={cardStyle}>
        <h3>Click on an illness for more information, and use the filters to get more specific!</h3>
        <br/>
        <FilteredList items={data} />
        </Card.Body>
      </Card>
    );
  } 

  return (
    <div style={backgroundStyle}>
      <div>
        <Disclaimer2/>
        <br/>
        <Card1/>
        <br/>
        <Footer/>
      </div>
    </div>
  )
};

export default Learn;