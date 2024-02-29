import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FilteredList from "../FilteredList";

const backgroundStyle = {
  backgroundColor: "#eeeeee",
};

const cardStyle = {
  backgroundColor: "#A2D9CE",
  minHeight: "500px",
};

const disclaimer2Style = {
  padding: "10px",
  marginTop: "20px",
  backgroundColor: "#367EB6",
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  textAlign: "center",
};

function Disclaimer2() {
  return (
    <Card style={disclaimer2Style}>
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          <h1>DISCLAIMER</h1>
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          <h3>
            We cannot provide an official diagnosis. If your are experiencing
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
        <Card.Title style={{ color: "white" }}>References</Card.Title>
        <Card.Text style={{ color: "white" }}>
          Centers for Disease Control and Prevention. CDC, https://www.cdc.gov/.
          <br />
          "Common Illnesses." Princeton University Health Services,
          https://uhs.princeton.edu/health-resources/common-illnesses.
          <br />
          "Health Issues Among College Students in the US." Statista,
          https://www.statista.com/statistics/826999/health-issues-among-college-students-us/.
          <br />
          Mayo Clinic. Mayo Clinic, https://www.mayoclinic.org/.
          <br />
          MedlinePlus. MedlinePlus, https://medlineplus.gov.
          <br />
          "US College Student Conditions." Statista,
          https://www.statista.com/statistics/1126483/us-college-student-conditions/.
          <br />
          WebMD. WebMD, https://www.webmd.com/.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Learn = () => {
  const data = [
    {
      id: 0,
      name: "Common Cold",
      type: ["Respiratory", "Viral"],
      symptoms: [
        "Cough",
        "Fever",
        "Nasal Congestion",
        "Runny Nose",
        "Sneezing",
        "Sore Throat",
      ],
      description:
        "The common cold is a mild upper respiratory illness. Symptoms usually reach a peak within 2 to 3 days, with the least common being a fever. However, some of the symptoms will slowly improve but can last up to 2 weeks long. Symptoms can be difficult to differentiate from influenza (the flu). A cold is caused by a multitude of viruses, with the most common type being rhinoviruses. There viruses spread between people through the air and by close personal contact. You can prevent contracting and spreading a cold by basic health and hygiene practices. Antibiotics will not help with a cold, instead it will get better on its own. Rest, drinking plenty of fluids, and some over the counter medications can help with symptom relief, but you should consult with a medical professional before taking anything.",
    },
    {
      id: 1,
      name: "Influenza (The Flu)",
      type: ["Respiratory", "Viral"],
      symptoms: [
        "Chills",
        "Cough",
        "Diarrhea",
        "Fatigue",
        "Fever",
        "Headaches",
        "Muscle/Body Aches",
        "Nasal Congestion",
        "Runny Nose",
        "Sore Throat",
        "Vomiting",
      ],
      description:
        "Influenza, also known as the flu, is a mild to severe respiratory illness that is contagious. It is caused by different influenza viruses which infect the nose, throat, and sometimes lungs. Severe cases can sometimes lead to death. Symptoms occur suddenly and usually last for 4 to 7 days. The best prevention is to receive an annual flu vaccine (shot) and basic health and hygiene practices. Influenza spreads when the virus comes in contact with someone’s mouth, nose, or eyes, mainly through droplets from the cough, sneeze, or spit of an infected person. It is most contagious in the first 3-4 days of symptoms, but can still pass the virus 1 day before symptoms start and up to 1 week after becoming sick. The complications of the flu include but are not limited to bacterial pneumonia, ear infections, sinus infections, and some worsening chronic conditions. The people at higher risk of complications are those who are pregnant, those younger than 5 or older than 65, and those who have certain chronic conditions (ex: asthma, diabetes, heart disease). If you have influenza, you might not need medical intervention, but take precautions to protect others, drink plenty of fluids, and get lots of rest. However, antiviral drugs prescribed by a medical professional can help treat the flu. Antibiotics will not help and might actually cause harm.",
    },
    {
      id: 2,
      name: "Coronavirus Disease (COVID-19)",
      type: ["Respiratory", "Viral"],
      symptoms: [
        "Chills",
        "Cough",
        "Diarrhea",
        "Fatigue",
        "Fever",
        "Headaches",
        "Loss of Taste/Smell",
        "Muscle/Body Aches",
        "Nasal Congestion",
        "Nausea",
        "Runny Nose",
        "Shortness of Breath",
        "Sore Throat",
        "Vomiting",
      ],
      description:
        "Coronavirus disease, also known as COVID-19, is a respiratory disease that is highly contagious and spread quickly. It is caused by the SARS-CoV-2 virus that usually attacks the lungs (could also affect other parts of the body). Most people have mild symptoms, while others have become severely sick. Those who are older, immunocompromised, or have certain underlying health conditions are at a higher risk from the illness. COVID-19 spreads when those infected breathe out small droplets containing the virus that either lands on a healthy person’s mouth, nose, or eyes or is breathed in. These droplets can also contaminate some surfaces. Anyone infected with coronavirus can spread it, even when there are no visible symptoms.  The best prevention is receiving the necessary COVID-19 vaccines and basic health and hygiene practices. For severe cases, there are treatments available (that must be started within the first week of symptoms) to reduce the chance of hospitalization. However, most cases are mild and symptoms can be treated with fluids, rest, and over-the-counter medications, but you should consult with a medical professional before taking anything. Seek Emergency Medical Attention if you are experiencing trouble breathing, persistent chest pain/pressure, an inability to stay awake, new confusion, or discolored (pale, gray, blue) skin, lips, or nail beds.",
    },
    {
      id: 3,
      name: "Respiratory Syncytial Virus Infection (RSV)",
      type: ["Respiratory", "Viral"],
      symptoms: [
        "Cough",
        "Decrease in Appetite",
        "Fever",
        "Runny Nose",
        "Sneezing",
        "Wheezing",
      ],
      description:
        "Respiratory Syncytial Virus Infection, also known as RSV, is a mild common respiratory virus. Symptoms usually appear within 4 to 6 days after infection. Recovery generally takes 1-2 weeks. However, it can be much more serious for infants and older adults, and these higher risk populations are the only ones eligible for the RSV vaccines. The virus is transmitted through small droplets that come from an infected person’s sneeze or cough. You can get sick if these droplets enter your mouth, nose, or eyes either through direct or indirect contact (such as touching an infected surface and then touching your face). To prevent RSV, use basic health and hygiene practices.",
    },
    {
      id: 4,
      name: "Anxiety",
      type: ["Mental Condition"],
      symptoms: [
        "Fatigue",
        "Feeling Fear",
        "Feeling Irritable",
        "Feeling Restless",
        "Headaches",
        "Muscle Tension/Knots",
        "Stomach Pain",
        "Trouble Concentrating",
        "Trouble Sleeping",
      ],
      description:
        "Most people experience mild anxiety as a part of normal life. However, if your anxiety is intense, lasts longer than 6 months (without any major life changes), or is affecting your daily activities, then you might have an anxiety disorder. This can look like many different things (the following are some examples). Separation anxiety is when someone experiences extreme fear or worry about being apart from someone else. Phobias are an extreme fear of a specific thing or situation. Social anxiety is having intense fear or worry of places and situations where there are a lot of people. The best way to deal with an anxiety disorder is to talk with a mental health professional (therapist/psychiatrist), who can recommend medications if necessary. Other things that might help include, taking time to relax, being active, in-person social connection, taking a break from social media, eating healthily, and getting a proper amount of sleep.",
    },
    {
      id: 5,
      name: "Seasonal Allergies",
      type: ["Allergen", "Chronic"],
      symptoms: [
        "Cough",
        "Headaches",
        "Nasal Congestion",
        "Puffiness",
        "Runny Nose",
        "Skin Irritation",
        "Sneezing",
      ],
      description:
        "Seasonal allergies are the most common form of allergies. Allergies are caused when an allergen (some foreign substance) triggers the immune defense system. They are usually triggered by specific outdoor plants. Seasonal allergies can occur from different allergens in different seasons and differ by location. The most common spring allergen is tree/grass pollen. For summer it is ragweed, and the most common for autumn and winter is mold/fungus. Ways to alleviate seasonal allergies include avoiding the outdoors, consulting a medical professional (for allergy medications), and trying allergy immunotherapy (builds a resistance to a specific allergy).",
    },
    {
      id: 6,
      name: "Allergic Reaction",
      type: ["Allergen", "Chronic"],
      symptoms: [
        "Anaphylaxis",
        "Cough",
        "Dizziness",
        "Fainting",
        "Increased Heart Rate",
        "Itchy Throat/Mouth",
        "Nasal Congestion",
        "Nausea",
        "Puffiness",
        "Runny Nose",
        "Shortness of Breath",
        "Skin Irritation",
        "Sneezing",
        "Sore Throat",
        "Stomach Pain",
        "Swelling",
        "Vomiting",
        "Watery Eyes",
        "Wheezing",
      ],
      description:
        "An allergic reaction occurs when an allergen (a foreign substance) comes in contact with someone who is allergic to the substance and the immune defense system is triggered. This contact differs by person but can be through skin, eyes, nose, mouth, or stomach. Some of the most common allergens are animal saliva and dander, insect bites, certain medications, certain foods (peanuts, shellfish, eggs, etc.), and certain materials such as latex. Allergic reactions can greatly vary in severity. If you have a known allergy, you should talk with a medical professional and talk about getting an epinephrine auto-injector (ex: EpiPen) for emergencies. The most severe allergic reactions cause anaphylaxis which is very serious. It can develop quickly after mild symptoms. People can outgrow allergies, but there is also the chance that with each allergic reaction the symptoms get worse. People can also develop more allergies. For mild symptom relief, over-the-counter antihistamines and decongestants can be very useful, but if symptoms are severe use an EpiPen (or other name/generic brand) and seek medical help immediately.",
    },
    {
      id: 7,
      name: "Insomnia",
      type: ["Chronic", "Sleep Disorder"],
      symptoms: [
        "Fatigue",
        "Feeling Irritable",
        "Trouble Concentrating",
        "Trouble Sleeping",
      ],
      description:
        "Insomnia is a sleep disorder where one has trouble falling asleep and /or staying asleep. It can either be short-term (acute) or chronic. The two types of insomnia are primary (sleep problems are not linked to other health conditions/problems) and secondary (sleep problems are because of pain, medication, substance abuse, or a health condition, such as asthma, depression, cancer, etc.). Some of the most common causes of insomnia are stress, the environment (noise, light, temperature), irregular sleep schedule, and genetics. Insomnia tends to affect women more than men and older people more than younger people. Tracking your sleep in a journal can help determine if you have a sleeping disorder. Behavioral therapy might help ease symptoms. Over-the-counter medications can as well, however, overuse can cause them to be ineffective. You bodies need sleep to rest and heal, therefore it is important to address insomnia so that your daily quality of life can be as good as possible.",
    },
    {
      id: 8,
      name: "Narcolepsy",
      type: ["Sleep Disorder"],
      symptoms: [
        "Hallucinations",
        "Over Sleeping",
        "Sleep Paralysis",
        "Temporary Loss of Muscle Tone",
        "Trouble Sleeping",
      ],
      description:
        "Narcolepsy is a sleep disorder where one uncontrollably falls asleep during the day. People with this condition tend to have trouble sleeping through the night. For most, narcolepsy begins between the ages of 15 and 30. There is no cure, but there are ways to ease symptoms and improve quality of life. The best of which is a combination of medications (prescribed by a health care professional) and certain lifestyle changes, such as a regular sleep schedule and scheduled naps during the day. With some, the disorder will start to diminish or even go away completely. Without proper monitoring and attention, narcolepsy can lead to memory problems, car accidents, higher risks of certain conditions (obesity, high blood pressure, mental health issues), and issues at work/school.",
    },
    {
      id: 9,
      name: "Depression",
      type: ["Mental Condition"],
      symptoms: [
        "Changes to Appetite",
        "Fatigue",
        "Feeling Irritable",
        "Feeling Sad",
        "Headaches",
        "Lack of Interest in Normal Activities",
        "Muscle/Body Aches",
        "Over Sleeping",
        "Stomach Pain",
        "Suicidal Thoughts",
        "Trouble Concentrating",
        "Trouble Sleeping",
      ],
      description:
        "Depression is a mental disorder where sadness and other negative emotions are extreme/persistent and interfere with daily activities. It is caused by a combination of genetic, biological, environmental, and psychological factors. Generally, roughly ⅙ adults experience depression in their lifetime. Some factors that might increase the chance of someone becoming depressed are substance abuse, experiencing a trauma, experiencing a major life change, major medical problems, and taking certain medications. The best treatment is talking to a mental health professional (therapist/psychiatrist), who can recommend medications if necessary.",
    },
    {
      id: 10,
      name: "Restless Legs Syndrome (RLS)",
      type: ["Neurological", "Sleep Disorder"],
      symptoms: [
        "Fatigue",
        "Feeling Restless",
        "Involuntary Limb Movements",
        "Itching",
        "Tingling",
        "Trouble Sleeping",
      ],
      description:
        "Restless legs syndrome (RLS) is a condition that causes a very strong urge to move the legs. The urge to move usually is caused by an uncomfortable feeling in the legs. It typically happens in the evening or at night when sitting or lying down. Moving eases the discomfort for a short time.",
    },
    {
      id: 11,
      name: "Sleep Paralysis",
      type: ["Sleep Disorder"],
      symptoms: [
        "Feeling Fear",
        "Feeling Panic",
        "Paralysis",
        "Sleep Paralysis",
        "Trouble Sleeping",
      ],
      description:
        "Sleep paralysis refers to the phenomenon in which resumption of consciousness occurs while muscle atonia of REM (rapid eye movement) sleep is maintained, leading to intense fear and apprehension in the patient as the patient lies awake without the ability to use any part of their body. This activity describes the typical presentation and evaluation of sleep paralysis, and it highlights the role of the healthcare team in improving care for patients with this condition.",
    },
    {
      id: 12,
      name: "Bulimia Nervosa",
      type: ["Eating Disorder", "Mental Condition"],
      symptoms: ["Changes to Appetite", "Vomiting", "Weight Loss"],
      description:
        "Bulimia nervosa, commonly called bulimia, is a serious, potentially life-threatening eating disorder. People with bulimia may secretly binge — eating large amounts of food with a loss of control over the eating — and then purge, trying to get rid of the extra calories in an unhealthy way.",
    },
    {
      id: 13,
      name: "Anorexia Nervosa",
      type: ["Eating Disorder", "Mental Condition"],
      symptoms: ["Weight Loss"],
      description:
        "Anorexia nervosa — often simply called anorexia — is an eating disorder characterized by an abnormally low body weight, an intense fear of gaining weight and a distorted perception of weight. People with anorexia place a high value on controlling their weight and shape, using extreme efforts that tend to significantly interfere with their lives.",
    },
    {
      id: 14,
      name: "Chlamydia",
      type: ["Sexually Transmitted Disease"],
      symptoms: ["Burning", "Discharge"],
      description:
        "Chlamydia is a common STD that can cause infection among both men and women. It can cause permanent damage to a woman’s reproductive system. This can make it difficult or impossible to get pregnant later. Chlamydia can also cause a potentially fatal ectopic pregnancy (pregnancy that occurs outside the womb).",
    },
    {
      id: 15,
      name: "Gonorrhea",
      type: ["Sexually Transmitted Disease"],
      symptoms: ["Burning", "Discharge", "Rash", "Sores"],
      description:
        "Gonorrhea is a sexually transmitted disease (STD) caused by infection with the Neisseria gonorrhoeae bacterium. N. gonorrhoeae infects the mucous membranes of the reproductive tract, including the cervix, uterus, and fallopian tubes in women, and the urethra in women and men.",
    },
    {
      id: 16,
      name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      type: ["Mental Condition"],
      symptoms: ["Lack of Focus", "Trouble Concentrating"],
      description:
        "ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active. It is marked by an ongoing pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development. In most cases, ADHD is best treated with a combination of behavior therapy and medication. For preschool-aged children (4-5 years of age) with ADHD, behavior therapy, particularly training for parents, is recommended as the first line of treatment before medication is tried. What works best can depend on the child and family. Good treatment plans will include close monitoring, follow-ups, and making changes, if needed, along the way.",
    },
    {
      id: 17,
      name: "Obsessive-Compulsive Disorder (OCD)",
      type: ["Mental Condition"],
      symptoms: ["Compulsions", "Obsessive"],
      description:
        "Obsessive-compulsive disorder usually includes both obsessions and compulsions. But it's also possible to have only obsession symptoms or only compulsion symptoms. You may or may not know that your obsessions and compulsions are beyond reason. But they take up a great deal of time, reduce your quality of life, and get in the way of your daily routines and responsibilities. If your obsessions and compulsions affect your quality of life, see your doctor or mental health professional.",
    },
    {
      id: 18,
      name: "Bipolar Disorder",
      type: ["Mental Condition"],
      symptoms: ["Manic Episodes", "Mood Swings"],
      description:
        "Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression). When you become depressed, you may feel sad or hopeless and lose interest or pleasure in most activities. When your mood shifts to mania or hypomania (less extreme than mania), you may feel euphoric, full of energy or unusually irritable. These mood swings can affect sleep, energy, activity, judgment, behavior and the ability to think clearly.",
    },
    {
      id: 19,
      name: "Bone Fracture",
      type: ["Physical"],
      symptoms: ["Pain", "Swelling"],
      description:
        "A bone fracture is the medical definition for a broken bone. Fractures are usually caused by traumas like falls, car accidents or sports injuries. But some medical conditions and repetitive forces (like running) can increase your risk for experiencing certain types of fractures. If you break a bone, you might need surgery to repair it. Some people only need a splint, cast, brace or sling for their bone to heal. How long it takes to recover fully depends on which of your bones are fractured, where the fracture is and what caused it.",
    },
    {
      id: 20,
      name: "Bone Sprain",
      type: ["Physical"],
      symptoms: ["Bruising", "Pain", "Swelling"],
      description:
        "A sprain is a stretching or tearing of ligaments — the tough bands of fibrous tissue that connect two bones together in your joints. The most common location for a sprain is in your ankle. Initial treatment includes rest, ice, compression and elevation. Mild sprains can be successfully treated at home. Severe sprains sometimes require surgery to repair torn ligaments.",
    },
    {
      id: 21,
      name: "Tendinitis",
      type: ["Physical"],
      symptoms: ["Pain", "Swelling", "Tenderness"],
      description:
        "Tendinitis is inflammation of the thick fibrous cords that attach muscle to bone. These cords are called tendons. The condition causes pain and tenderness just outside a joint. Tendinitis can occur in any tendon. But it's most common around shoulders, elbows, wrists, knees and heels. Most tendinitis can be treated with rest, physical therapy and medicine to reduce pain. Long-lasting tendon inflammation can cause a tendon to tear. A torn tendon might need surgery.",
    },
    {
      id: 22,
      name: "Anterior Cruciate Ligament (ACL) Tear",
      type: ["Physical"],
      symptoms: ["Loss of Motion", "Pain", "Popping of Knee", "Swelling"],
      description:
        'An ACL injury is a tear or sprain of the anterior cruciate (KROO-she-ate) ligament (ACL) — one of the strong bands of tissue that help connect your thigh bone (femur) to your shinbone (tibia). ACL injuries most commonly occur during sports that involve sudden stops or changes in direction, jumping and landing — such as soccer, basketball, football and downhill skiing. Many people hear a pop or feel a "popping" sensation in the knee when an ACL injury occurs. Your knee may swell, feel unstable and become too painful to bear weight. Depending on the severity of your ACL injury, treatment may include rest and rehabilitation exercises to help you regain strength and stability, or surgery to replace the torn ligament followed by rehabilitation. A proper training program may help reduce the risk of an ACL injury.',
    },
    {
      id: 23,
      name: "Urinary Tract Infection (UTI)",
      type: ["Infection"],
      symptoms: ["Discolored Urine", "Pain"],
      description:
        "A urinary tract infection (UTI) is an infection in any part of the urinary system. The urinary system includes the kidneys, ureters, bladder and urethra. Most infections involve the lower urinary tract — the bladder and the urethra. Women are at greater risk of developing a UTI than are men. If an infection is limited to the bladder, it can be painful and annoying. But serious health problems can result if a UTI spreads to the kidneys. Health care providers often treat urinary tract infections with antibiotics. You can also take steps to lower the chance of getting a UTI in the first place.",
    },
    {
      id: 24,
      name: "Sinusitis (Sinus Infection)",
      type: ["Infection"],
      symptoms: ["Nasal Congestion", "Pain", "Runny Nose", "Tenderness"],
      description:
        "Acute sinusitis causes the spaces inside the nose, known as sinuses, to become inflamed and swollen. Acute sinusitis makes it hard for the sinuses to drain. Mucus builds up. Acute sinusitis can make it hard to breathe through the nose. The area around the eyes and the face might feel swollen. There might be throbbing face pain or a headache. The common cold is the usual cause of acute sinusitis. Most often, the condition clears up within a week to 10 days unless there's also an infection caused by bacteria, called a bacterial infection. Home remedies might be all that's needed to treat acute sinusitis. Sinusitis that lasts more than 12 weeks even with medical treatment is called chronic sinusitis.",
    },
    {
      id: 25,
      name: "Gastritis",
      type: ["Inflammation"],
      symptoms: ["Nausea", "Pain", "Vomiting"],
      description:
        "Gastritis is a general term for a group of conditions with one thing in common: Inflammation of the lining of the stomach. The inflammation of gastritis is most often the result of infection with the same bacterium that causes most stomach ulcers or the regular use of certain pain relievers. Drinking too much alcohol also can contribute to gastritis. Gastritis may occur suddenly (acute gastritis) or appear slowly over time (chronic gastritis). In some cases, gastritis can lead to ulcers and an increased risk of stomach cancer. For most people, however, gastritis isn't serious and improves quickly with treatment.",
    },
    {
      id: 26,
      name: "Diarrhea",
      type: ["Infection", "Viral"],
      symptoms: ["Bloating", "Diarrhea", "Fever", "Nausea", "Vomiting"],
      description:
        "Diarrhea — loose, watery and possibly more-frequent bowel movements — is a common problem. Usually caused by a viral infection. Sometimes, it's the only symptom. At other times, it may be associated with other symptoms, such as nausea, vomiting, abdominal pain or weight loss. Luckily, diarrhea is usually short-lived, lasting no more than a few days. But when diarrhea lasts beyond a few days into weeks, it usually means that there's another problem — such as irritable bowel syndrome (IBS) or a more serious disorder, including ongoing infection, celiac disease or inflammatory bowel disease (IBD).",
    },
    {
      id: 27,
      name: "Food Poisoning",
      type: ["Foodborne Illness"],
      symptoms: ["Diarrhea", "Fever", "Headaches", "Vomiting"],
      description:
        "Food poisoning, a type of foodborne illness, is a sickness people get from something they ate or drank. The causes are germs or other harmful things in the food or beverage. Symptoms of food poisoning often include upset stomach, diarrhea and vomiting. Symptoms usually start within hours or several days of eating the food. Most people have mild illnesses and get better without treatment. Sometimes food poisoning causes severe illness or complications.",
    },
    {
      id: 28,
      name: "Gastroenteritis (Stomach Flu)",
      type: ["Infection"],
      symptoms: ["Cramps", "Fever", "Nausea ", "Vomiting"],
      description:
        "Viral gastroenteritis is an intestinal infection that includes signs and symptoms such as watery diarrhea, stomach cramps, nausea or vomiting, and sometimes fever. The most common way to develop viral gastroenteritis — often called stomach flu — is through contact with an infected person or by consuming contaminated food or water. If you're otherwise healthy, you'll likely recover without complications. But for infants, older adults and people with compromised immune systems, viral gastroenteritis can be deadly. There's no effective treatment for viral gastroenteritis, so prevention is key. Avoid food and water that may be contaminated and wash your hands thoroughly and often.",
    },
    {
      id: 29,
      name: "Bronchitis",
      type: ["Inflammation"],
      symptoms: ["Chills", "Cough", "Fatigue"],
      description:
        "Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs. People who have bronchitis often cough up thickened mucus, which can be discolored. Bronchitis may be either acute or chronic. Often developing from a cold or other respiratory infection, acute bronchitis is very common. Chronic bronchitis, a more serious condition, is a constant irritation or inflammation of the lining of the bronchial tubes, often due to smoking. Acute bronchitis, also called a chest cold, usually improves within a week to 10 days without lasting effects, although the cough may linger for weeks. However, if you have repeated bouts of bronchitis, you may have chronic bronchitis, which requires medical attention. Chronic bronchitis is one of the conditions included in chronic obstructive pulmonary disease (COPD).",
    },
    {
      id: 30,
      name: "Pneumonia",
      type: ["Inflammation"],
      symptoms: ["Chills", "Cough", "Fatigue", "Fever", "Nausea", "Vomiting"],
      description:
        "Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus (purulent material), causing cough with phlegm or pus, fever, chills, and difficulty breathing. A variety of organisms, including bacteria, viruses and fungi, can cause pneumonia. Pneumonia can range in seriousness from mild to life-threatening. It is most serious for infants and young children, people older than age 65, and people with health problems or weakened immune systems. See your doctor if you have difficulty breathing, chest pain, persistent fever of 102 F (39 C) or higher, or persistent cough, especially if you're coughing up pus.",
    },
    {
      id: 31,
      name: "Mononucleosis (Epstein-Barr Virus) (Mono)",
      type: ["Viral"],
      symptoms: ["Fever", "Headaches", "Sore Throat", "Swelling"],
      description:
        "Epstein-Barr virus (EBV) is one of the most common viruses that people catch. It can cause a disease called mononucleosis, also known as mono. But when most people get EBV, they have no symptoms. It takes more than a cough or sneeze to spread EBV. The virus spreads from person to person mainly through saliva There's no clear-cut treatment for mono. You can take steps to ease the symptoms by: Drinking water or other fluids to stay hydrated, Getting lots of rest and taking medicine that you can get without a prescription for pain and fever. Some people need treatment for other health problems caused by mono. But most people with the disease get better within a month.",
    },
    {
      id: 32,
      name: "Shingles",
      type: ["Infection", "Viral"],
      symptoms: ["Itching", "Pain", "Rash"],
      description:
        "Shingles is a viral infection that causes a painful rash. Shingles can occur anywhere on your body. It typically looks like a single stripe of blisters that wraps around the left side or the right side of your torso. Shingles is caused by the varicella-zoster virus — the same virus that causes chickenpox. After you've had chickenpox, the virus stays in your body for the rest of your life. Years later, the virus may reactivate as shingles. Shingles aren't life-threatening. But it can be very painful. Vaccines can help lower the risk of shingles. Early treatment may shorten a shingles infection and lessen the chance of complications. The most common complication is postherpetic neuralgia. This is a painful condition that causes shingles pain for a long time after your blisters have cleared.",
    },
    {
      id: 33,
      name: "Varicella (Chicken Pox)",
      type: ["Viral"],
      symptoms: ["Bumps", "Redness", "Fever", "Headaches", "Rash", "Scabs"],
      description:
        "Chickenpox is an illness caused by the varicella-zoster virus. It brings on an itchy rash with small, fluid-filled blisters. Chickenpox spreads very easily to people who haven't had the disease or haven't gotten the chickenpox vaccine. Chickenpox used to be a widespread problem, but today the vaccine protects children from it.",
    },
    {
      id: 34,
      name: "Migraine",
      type: ["Physical"],
      symptoms: ["Constipation", "Headaches", "Mood Swings", "Pain"],
      description:
        "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound. Migraine attacks can last for hours to days, and the pain can be so bad that it interferes with your daily activities. Medications can help prevent some migraines and make them less painful. The right medicines, combined with self-help remedies and lifestyle changes, might help.",
    },
    {
      id: 35,
      name: "Irritable Bowel Syndrome (IBS)",
      type: ["Intestinal Disorder", "Physical"],
      symptoms: ["Abnormal Bowel Movement", "Pain"],
      description:
        "Irritable bowel syndrome (IBS) is a common disorder that affects the stomach and intestines, also called the gastrointestinal tract. Symptoms include cramping, abdominal pain, bloating, gas, and diarrhea or constipation, or both. IBS is a chronic condition that you'll need to manage long term.  Some people can control their symptoms by managing diet, lifestyle and stress. More-severe symptoms can be treated with medication and counseling.",
    },
    {
      id: 36,
      name: "Asthma",
      type: ["Respiratory"],
      symptoms: ["Chest Tightness", "Shortness of Breath", "Wheezing"],
      description:
        "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath. For some people, asthma is a minor nuisance. For others, it can be a major problem that interferes with daily activities and may lead to a life-threatening asthma attack. Asthma can't be cured, but its symptoms can be controlled. Because asthma often changes over time, it's important that you work with your doctor to track your signs and symptoms and adjust your treatment as needed.",
    },
    {
      id: 37,
      name: "Diabetes (Type I & Type II)",
      type: ["Chronic"],
      symptoms: [
        "Fatigue",
        "Feeling Thirsty",
        "Frequent Urination",
        "Weight Loss",
      ],
      description:
        "Diabetes mellitus refers to a group of diseases that affect how the body uses blood sugar (glucose). Glucose is an important source of energy for the cells that make up the muscles and tissues. It's also the brain's main source of fuel. The main cause of diabetes varies by type. But no matter what type of diabetes you have, it can lead to excess sugar in the blood. Too much sugar in the blood can lead to serious health problems. Chronic diabetes conditions include type 1 diabetes and type 2 diabetes. Potentially reversible diabetes conditions include prediabetes and gestational diabetes, otherwise the condition is chronic. Prediabetes happens when blood sugar levels are higher than normal. But the blood sugar levels aren't high enough to be called diabetes. And prediabetes can lead to diabetes unless steps are taken to prevent it. Gestational diabetes happens during pregnancy. But it may go away after the baby is born.",
    },
    {
      id: 38,
      name: "Pelvic Inflammatory Disease (PID)",
      type: ["Infection", "Reproductive"],
      symptoms: ["Bleeding", "Pain"],
      description:
        "Pelvic inflammatory disease (PID) is an infection of the female reproductive organs. It most often occurs when sexually transmitted bacteria spread from your vagina to your uterus, fallopian tubes or ovaries. The signs and symptoms of pelvic inflammatory disease can be subtle or mild. Some women don't experience any signs or symptoms. As a result, you might not realize you have it until you have trouble getting pregnant or you develop chronic pelvic pain.",
    },
    {
      id: 39,
      name: "Mumps",
      type: ["Viral"],
      symptoms: ["Fatigue", "Fever", "Headaches", "Pain", "Swelling"],
      description:
        "Mumps is an illness caused by a virus. It usually affects the glands on each side of the face. These glands, called parotid glands, make saliva. Swollen glands may be tender or painful.",
    },
    {
      id: 40,
      name: "Acne",
      type: ["Skin", "Physical"],
      symptoms: [
        "Blackheads",
        "Lumps",
        "Papules",
        "Pimples",
        "Skin Irritation",
        "Whiteheads",
      ],
      description:
        "Acne is a skin condition that occurs when your hair follicles become clogged with oil and dead skin cells. It causes whiteheads, blackheads or pimples. Acne is most common among teenagers, though it affects people of all ages. Effective acne treatments are available, but acne can be persistent. The pimples and bumps heal slowly, and when one begins to go away, others seem to crop up.",
    },
    {
      id: 41,
      name: "Atopic Dermatitis (Eczema)",
      type: ["Skin"],
      symptoms: ["Bumps", "Dry Skin", "Itching", "Rash"],
      description:
        "Atopic dermatitis (eczema) is a condition that causes dry, itchy and inflamed skin. It's common in young children but can occur at any age. Atopic dermatitis is long lasting (chronic) and tends to flare sometimes. It can be irritating but it's not contagious. People with atopic dermatitis are at risk of developing food allergies, hay fever and asthma. Moisturizing regularly and following other skin care habits can relieve itching and prevent new outbreaks (flares). Treatment may also include medicated ointments or creams.",
    },
    {
      id: 42,
      name: "Conjunctivitis (Pink Eye)",
      type: ["Inflammation"],
      symptoms: ["Itching", "Redness", "Tearing"],
      description:
        "Pink eye is an inflammation of the transparent membrane that lines the eyelid and eyeball. This membrane is called the conjunctiva. When small blood vessels in the conjunctiva become swollen and irritated, they're more visible. This is what causes the whites of the eyes to appear reddish or pink. Pink eye also is called conjunctivitis. Pink eye is most often caused by a viral infection. It also can be caused by a bacterial infection, an allergic reaction or — in babies — an incompletely opened tear duct. Though pink eye can be irritating, it rarely affects your vision. Treatments can help ease the discomfort of pink eye. Because pink eye can be contagious, getting an early diagnosis and taking certain precautions can help limit its spread.",
    },
    {
      id: 43,
      name: "Dental Cavities (Tooth Decay)",
      type: ["Dental"],
      symptoms: ["Pain", "Toothache"],
      description:
        "Cavities are areas in the hard surface of your teeth that are damaged. These areas of tooth decay become tiny openings or holes that can lead to a serious toothache, infection and tooth loss. There are several causes of cavities, including bacteria in your mouth, snacking a lot, sipping sugary drinks and not cleaning your teeth well. If cavities aren't treated, they get larger and affect deeper layers of your teeth. Regular dental visits and good brushing and flossing habits are the best ways to protect your teeth from cavities.",
    },
    {
      id: 44,
      name: "Gingivitis",
      type: ["Dental"],
      symptoms: ["Swelling", "Tenderness"],
      description:
        "Gingivitis is a common and mild form of gum disease, also called periodontal disease. It causes irritation, redness, swelling and bleeding of your gingiva, which is the part of your gum around the base of your teeth. It's important to take gingivitis seriously and treat it promptly. Gingivitis does not cause bone loss. But left untreated, it can lead to a much more serious gum disease, called periodontitis, and tooth loss.",
    },
    {
      id: 45,
      name: "Addiction (Substance Abuse)",
      type: ["Mental Condition"],
      symptoms: [
        "Riskier Behavior",
        "Substance Abuse",
        "Trouble Concentrating",
        "Withdrawal",
      ],
      description:
        "Drug addiction, also called substance use disorder, is a disease that affects a person's brain and behavior and leads to an inability to control the use of a legal or illegal drug or medicine. Substances such as alcohol, marijuana and nicotine also are considered drugs. When you're addicted, you may continue using the drug despite the harm it causes. Help from your healthcare provider, family, friends, support groups or an organized treatment program can help you overcome your drug addiction and stay drug-free.",
    },
    {
      id: 46,
      name: "Concussion",
      type: ["Physical"],
      symptoms: ["Blurry Vision", "Headaches", "Nausea", "Vomiting"],
      description:
        "A concussion is a mild traumatic brain injury that affects brain function. Effects are often short term and can include headaches and trouble with concentration, memory, balance, mood and sleep. Concussions usually are caused by an impact to the head or body that is associated with a change in brain function. Not everyone who experiences a blow to the body or head has a concussion.",
    },
    {
      id: 47,
      name: "Gastroesophageal Reflux Disease – GERD (Acid Reflux)",
      type: ["Stomach"],
      symptoms: ["Chest Pain", "Cough", "Lumps"],
      description:
        "Gastroesophageal reflux disease (GERD) occurs when stomach acid repeatedly flows back into the tube connecting your mouth and stomach (esophagus). This backwash (acid reflux) can irritate the lining of your esophagus. Many people experience acid reflux from time to time. However, when acid reflux happens repeatedly over time, it can cause GERD. Most people are able to manage the discomfort of GERD with lifestyle changes and medications. And though it's uncommon, some may need surgery to ease symptoms.",
    },
    {
      id: 48,
      name: "Hypertension (High Blood Pressure)",
      type: ["Blood"],
      symptoms: ["Headaches", "Nosebleeds", "Shortness of Breath"],
      description:
        "High blood pressure is a common condition that affects the body's arteries. It's also called hypertension. If you have high blood pressure, the force of the blood pushing against the artery walls is consistently too high. The heart has to work harder to pump blood. Blood pressure is measured in millimeters of mercury (mm Hg). In general, hypertension is a blood pressure reading of 130/80 millimeters of mercury (mm Hg) or higher. The American College of Cardiology and the American Heart Association divide blood pressure into four general categories. Ideal blood pressure is categorized as normal. Untreated, high blood pressure increases the risk of heart attack, stroke and other serious health problems. It's important to have your blood pressure checked at least every two years starting at age 18. Some people need more-frequent checks. Healthy lifestyle habits —such as not smoking, exercising and eating well — can help prevent and treat high blood pressure. Some people need medicine to treat high blood pressure.",
    },
    {
      id: 49,
      name: "High Cholesterol",
      type: ["Blood"],
      symptoms: ["Asymptomatic (no symptoms)"],
      description:
        "Cholesterol is a waxy substance found in your blood. Your body needs cholesterol to build healthy cells, but high levels of cholesterol can increase your risk of heart disease. With high cholesterol, you can develop fatty deposits in your blood vessels. Eventually, these deposits grow, making it difficult for enough blood to flow through your arteries. Sometimes, those deposits can break suddenly and form a clot that causes a heart attack or stroke. High cholesterol can be inherited, but it's often the result of unhealthy lifestyle choices, which make it preventable and treatable. A healthy diet, regular exercise and sometimes medication can help reduce high cholesterol.",
    },
    {
      id: 50,
      name: "Ear Infections",
      type: ["Infection"],
      symptoms: ["Headaches", "Hearing loss", "Pain"],
      description:
        "An ear infection (sometimes called acute otitis media) is an infection of the middle ear, the air-filled space behind the eardrum that contains the tiny vibrating bones of the ear. Children are more likely than adults to get ear infections. In an ear infection, narrow tubes that run from the middle ear to high in the back of the throat (eustachian tubes) can become swollen and blocked. This can lead to mucus build-up in the middle ear. This mucus can become infected and cause ear infection symptoms. Because ear infections often clear up on their own, treatment may begin with managing pain and monitoring the problem. Sometimes, antibiotics are used to clear the infection. Some people are prone to having multiple ear infections. This can cause hearing problems and other serious complications.",
    },
    {
      id: 51,
      name: "Genital Herpes",
      type: ["Sexually Transmitted Disease", "Viral"],
      symptoms: ["Bumps", "Discharge", "Itching", "Pain"],
      description:
        "Genital herpes is a common sexually transmitted infection (STI). The herpes simplex virus (HSV) causes genital herpes. Genital herpes can often be spread by skin-to-skin contact during sexual activity. Some people infected with the virus may have very mild symptoms or no symptoms. They can still able to spread the virus. Other people have pain, itching and sores around the genitals, anus or mouth. There is no cure for genital herpes. Symptoms often show up again after the first outbreak. Medicine can ease symptoms. It also lowers the risk of infecting others. Condoms can help prevent the spread of a genital herpes infection.",
    },
    {
      id: 52,
      name: "Tonsillitis",
      type: ["Inflammation"],
      symptoms: [
        "Bad Breath",
        "Fever",
        "Headaches",
        "Stomach Pain",
        "Swelling",
      ],
      description:
        "Tonsillitis is inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat — one tonsil on each side. Signs and symptoms of tonsillitis include swollen tonsils, sore throat, difficulty swallowing and tender lymph nodes on the sides of the neck. Most cases of tonsillitis are caused by infection with a common virus, but bacterial infections also may cause tonsillitis. Because appropriate treatment for tonsillitis depends on the cause, it's important to get a prompt and accurate diagnosis. Surgery to remove tonsils, once a common procedure to treat tonsillitis, is usually performed only when tonsillitis occurs frequently, doesn't respond to other treatments or causes serious complications.",
    },
    {
      id: 53,
      name: "Tuberculosis (TB)",
      type: ["Respiratory"],
      symptoms: ["Cough", "Fatigue", "Fever"],
      description:
        "Tuberculosis (TB) is a serious illness that mainly affects the lungs. The germs that cause tuberculosis are a type of bacteria. Tuberculosis can spread when a person with the illness coughs, sneezes or sings. This can put tiny droplets with the germs into the air. Another person can then breathe in the droplets, and the germs enter the lungs. Tuberculosis spreads easily where people gather in crowds or where people live in crowded conditions. People with HIV/AIDS and other people with weakened immune systems have a higher risk of catching tuberculosis than people with typical immune systems. Drugs called antibiotics can treat tuberculosis. But some forms of the bacteria no longer respond well to treatments.",
    },
    {
      id: 54,
      name: "Meningitis",
      type: ["Inflammation", "Infection"],
      symptoms: ["Fever", "Headaches", "Nausea", "Sensitivity", "Vomiting"],
      description:
        "Meningitis is an infection and inflammation of the fluid and membranes surrounding the brain and spinal cord. These membranes are called meninges. The inflammation from meningitis typically triggers symptoms such as headache, fever and a stiff neck. Most cases of meningitis in the United States are caused by a viral infection. But bacteria, parasites and fungi also can cause it. Some cases of meningitis improve without treatment in a few weeks. Others can cause death and require emergency antibiotic treatment.",
    },
    {
      id: 55,
      name: "Anemia",
      type: ["Blood"],
      symptoms: ["Chest Pain", "Fatigue", "Headaches", "Jaundice"],
      description:
        "Anemia is a problem of not having enough healthy red blood cells or hemoglobin to carry oxygen to the body's tissues. Hemoglobin is a protein found in red cells that carries oxygen from the lungs to all other organs in the body. Having anemia can cause tiredness, weakness and shortness of breath. Treatments for anemia might involve taking supplements or having medical procedures. Eating a healthy diet might prevent some forms of anemia.",
    },
    {
      id: 56,
      name: "Hepatitis A",
      type: ["Infection"],
      symptoms: [
        "Fatigue",
        "Fever",
        "Itching",
        "Jaundice",
        "Nausea",
        "Vomiting",
      ],
      description:
        "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus. The virus is one of several types of hepatitis viruses that cause liver inflammation and affect your liver's ability to function. You're most likely to get hepatitis A from contaminated food or water or from close contact with a person or object that's infected. Mild cases of hepatitis A don't require treatment. Most people who are infected recover completely with no permanent liver damage. Practicing good hygiene, including washing hands frequently, can prevent the spread of the virus. The hepatitis A vaccine can protect against hepatitis A.",
    },
    {
      id: 57,
      name: "Hepatitis B",
      type: ["Infection"],
      symptoms: [
        "Fatigue",
        "Fever",
        "Itching",
        "Jaundice",
        "Nausea",
        "Vomiting",
      ],
      description:
        "Hepatitis B is a serious liver infection caused by the hepatitis B virus (HBV). For most people, hepatitis B is short term, also called acute, and lasts less than six months. But for others, the infection becomes chronic, meaning it lasts more than six months. Having chronic hepatitis B increases your risk of developing liver failure, liver cancer or cirrhosis — a condition that permanently scars the liver. Most adults with hepatitis B recover fully, even if their symptoms are severe. Infants and children are more likely to develop a long-lasting hepatitis B infection. This is known as a chronic infection. A vaccine can prevent hepatitis B, but there's no cure if you have the condition. If you're infected, taking certain precautions can help prevent spreading the virus to others.",
    },
    {
      id: 58,
      name: "Inflammatory Bowel Disease (IBD)",
      type: ["Inflammation"],
      symptoms: ["Bleeding", "Diarrhea", "Pain", "Weight Loss"],
      description:
        "Inflammatory bowel disease (IBD) is a term that describes disorders involving long-standing (chronic) inflammation of tissues in your digestive tract. Types of IBD include: Ulcerative colitis. This condition involves inflammation and sores (ulcers) along the lining of your large intestine (colon) and rectum Crohn's disease. This type of IBD is characterized by inflammation of the lining of your digestive tract, which often can involve the deeper layers of the digestive tract. Crohn's disease most commonly affects the small intestine. However, it can also affect the large intestine and uncommonly, the upper gastrointestinal tract.",
    },
    {
      id: 59,
      name: "Pregnancy",
      type: ["Reproductive"],
      symptoms: ["Missed Period", "Nausea", "Pain", "Vomiting"],
      description:
        "Pregnancy is the time during which one or more offspring develops  (gestates) inside a woman's uterus (womb). It is caused by sexual intercorse between a man and a woman. The sperm fertilizes the egg and then the woman carries the offspring for 9 months, granted there are no complications. Abortion laws vary for state to state, so make sure you are aware of your rights.",
    },
    {
      id: 60,
      name: "Hives",
      type: ["Skin"],
      symptoms: ["Itching", "Welts"],
      description:
        "Hives — also known as urticaria (ur-tih-KAR-e-uh) — is a skin reaction that causes itchy welts that range in size from small spots to large blotches. Hives can be triggered by many situations and substances, including certain foods and medications. Angioedema can arise with hives or alone. It causes swelling in the deeper layers of skin, often around the face and lips. Short-lived (acute) hives and angioedema are common. Most times, they are harmless, clear up within a day and don't leave any lasting marks, even without treatment. Hives that last longer than six weeks are called chronic hives.",
    },
    {
      id: 61,
      name: "Plantar Warts",
      type: ["Skin", "Viral"],
      symptoms: ["Bumps", "Pain"],
      description:
        "Plantar warts are warts that are on the bottom of one’s feet, which is known as the plantar surface. Calluses caused by normal daily activity make it more difficult to treat the warts, and the increased pressure can make them more painful. Similar to all warts, some go away without treatment, but in other cases they are too painful to ignore. Treatments vary, so speak to a medical professional about options.",
    },
    {
      id: 62,
      name: "Lyme Disease",
      type: ["Chronic"],
      symptoms: [
        "Chills",
        "Dizziness",
        "Fatigue",
        "Fever",
        "Headaches",
        "Joint/Muscle Pain",
        "Numbness",
        "Pain",
        "Shortness of Breath",
        "Skin Irritation",
        "Stiffness",
        "Swelling",
      ],
      description:
        "Lyme disease is a chronic disease, and in the United States, it is the most common vector-borne disease. It is caused by being bitten by a certain type of infected tick. If left untreated, infection can spread to the heart and nervous system. While a few weeks of prescribed antibiotics will prevent infection and cure many symptoms, others will remain which is why it is considered chronic. The ticks that transmit lyme disease many also transmit many other diseases, so it is important to take steps to prevent tick bites and be vigilant for signs of a tick bite.",
    },
    {
      id: 63,
      name: "Celiac Disease",
      type: ["Autoimmune", "Chronic"],
      symptoms: [
        "Anemia",
        "Bloating",
        "Constipation",
        "Diarrhea",
        "Nausea",
        "Pain",
        "Skin Irritation",
        "Stomach Pain",
        "Ulcers",
        "Weight Loss",
      ],
      description:
        "Celiac disease is a chronic autoimmune disorder that is activated when one eats gluten. Gluten is a protein contained in wheat and other grains. It is different from a gluten allergy, although they share some symptoms. When someone with celiac disease consumes gluten, their small intestine is slightly damaged making it hard to properly absorb nutrients from food. If this occurs too often it could lead to complications, such as malnourishment, infertility, miscarriage, certain cancers, or neurological diseases. The only treatment is a change in diet (avoid eating or drinking things with gluten).",
    },
    {
      id: 64,
      name: "Fibromyalgia",
      type: ["Chronic", "Physical"],
      symptoms: [
        "Aching",
        "Bloating",
        "Burning",
        "Constipation",
        "Depression",
        "Diarrhea",
        "Fatigue",
        "Frequent Urination",
        "Headaches",
        "Numbness",
        "Pain",
        "Stiffness",
        "Stomach Pain",
        "Trouble Concentrating",
        "Trouble Sleeping",
      ],
      description:
        "Fibromyalgia is a chronic condition that causes pain and soreness practically anywhere on the body. While there is no cure, a combination of treatments (exercise, stress management, medication, and basic healthy habits) can reduce symptoms and make daily life normal again. Everyone with fibromyalgia has different triggers that cause the pain. Some possible triggers include major emotional stress, life changes, bad nutrition, hormone changes, a lack of sleep, other illnesses, and changes to medication. People with this condition found it beneficial to not only speak with a medical professional, but also a mental health professional and a physical therapist.",
    },
    {
      id: 65,
      name: "Burns",
      type: ["Physical"],
      symptoms: ["Blisters", "Numbness", "Pain", "Redness", "Swelling"],
      description:
        "A burn is a physical injury where there is tissue damage. It can be caused by a variety of things, such as heat (most common), radiation, friction, the sun, chemicals, and electricity. Burns also greatly range in severity. First-degree burns, also known as superficial burns, are mild and usually only cause pain and redness on the outer layer of skin. Second-degree burns, also known as partial thickness burns, affect the outer and lower layer of skin and can cause pain, redness, swelling, and blistering. Third-degree burns, also known as full thickness burns, affects deeper tissues, and symptoms include the previous symptoms as well as charred skin and numbness. First-degree burns can be treated with over-the-counter creams and medication. However, second- and third-degree burns require antibiotics and potentially further treatment that needs to be administered by a medical professional.",
    },
    {
      id: 66,
      name: "Panic Attack",
      type: ["Mental Condition"],
      symptoms: [
        "Chills",
        "Dizziness",
        "Feeling Fear",
        "Feeling Panic",
        "Hot Flashes",
        "Nausea",
        "Numbness",
        "Pain",
        "Shaking",
        "Shortness of Breath",
        "Sweating",
      ],
      description:
        "A panic attack is a mental condition that causes moments of intense fear. It can feel like you are going to die even when there is no real threat or danger. They can happen suddenly and can happen to anyone. They will usually last only a couple of minutes but can go on for hours. After the fact, you will usually feel tired and drained. When experiencing a panic attack, try to control your breathing. Find a comfortable place to sit down and concentrate on deep slow breaths. If you believe it could be more than a panic attack, seek medical attention immediately. If it develops into a panic disorder, then medication and therapy can help with symptom management.",
    },
    {
      id: 67,
      name: "Autism Spectrum Disorder",
      type: ["Chronic", "Developmental"],
      symptoms: [
        "Attention to Detail",
        "Avoids Eye Contact",
        "Feeling Fear",
        "Feeling Irritable",
        "Feeling Restless",
        "Seizures",
        "Social Anxiety",
        "Trouble Concentrating",
        "Trouble with Change",
      ],
      description:
        "Autism spectrum disorder is a chronic developmental condition that greatly ranges in severity. It is a spectrum disorder that affects communication and behavior. People with autism might have a variety of issues including trouble understanding others, problems expressing themselves, and learning skill development unevenly. Treatments can not cure autism, but it can make daily life significantly easier. Different treatments work for different people due to the variety of symptoms and severity, so speak with a medical profession to find out what are the different options that might help.",
    },
    {
      id: 68,
      name: "Sleep Apnea",
      type: ["Chronic", "Sleep Disorder"],
      symptoms: [
        "Depression",
        "Fatigue",
        "Frequent Urination",
        "Headaches",
        "Snoring",
        "Sore Throat",
        "Sweating",
        "Trouble Concentrating",
        "Trouble Sleeping",
      ],
      description:
        "Sleep apnea is a chronic sleep disorder where your breathing can stop and start while you are asleep, which can be very dangerous. In the more severe cases, airways become blocked due to soft tissue in the back of the throat collapsing. During these times your body is working harder than it should to open your airways. It can lead to a reduced amount of oxygen flow and abnormal heart rhythms. For mild cases, treatment could be as simple as lifestyle changes. While for the more severe cases a CPAP (machine designed to help air enter the body while you sleep) might be necessary.",
    },
    {
      id: 69,
      name: "Impetigo",
      type: ["Bacterial", "Infection", "Skin"],
      symptoms: ["Blisters", "Skin Irritation"],
      description:
        "Impetigo is a common bacterial skin infection. It can spread very easily and it is usually located around the nose and mouth. It causes blisters and sores that can be very itchy, and it is easily durable with prescribed antibiotics. To avoid spreading the infection to others or other parts of your body, avoid touching/scratching the infected areas. There are three different types of impetigo. Non-bullous is the most common and causes small blisters that are itchy but not painful. Bullous is when there are large fluid-filled blisters that are painful and itchy. Ecthyma is the most serious and develops if the other types go untreated. It goes deeper in the skin and can cause sores that lead to ulcers. Impetigo can be prevented with basic health and hygiene practices.",
    },
    {
      id: 70,
      name: "Lupus",
      type: ["Autoimmune", "Chronic"],
      symptoms: [
        "Anemia",
        "Blood Clotting",
        "Fatigue",
        "Fever",
        "Hair Loss",
        "Joint/Muscle Pain",
        "Pain",
        "Skin Irritation",
        "Sores",
      ],
      description:
        "Lupus is a chronic autoimmune disease that affects any/all parts of the body. Symptoms vary from person to person and come in flares (meaning there are moments where they worsen and moments where they are relieved). While there is no way cure lupus, treatment options provided by a medical professional can help alleviate symptoms, prevent flares, and prevent other health problems/complications that could arise.",
    },
    {
      id: 71,
      name: "Tourette Syndrome",
      type: ["Chronic", "Neurological"],
      symptoms: ["Tics"],
      description:
        "Tourette syndrome is a chronic neurological condition that causes people to have tics. There are two different types of tics that both range in severity. Motor tics are body movements, such as eye blinking, body twitches, or jerking of a limb. Vocal tics are sounds one makes, including humming, throat clearing, or yelling a certain word/phrase. Simple tics affect a few parts of the body. While complex tics affect different parts of the body and can often have a pattern. There is no treatment for Tourette syndrome, however, there are different treatment options available to help manage tics.",
    },
    {
      id: 72,
      name: "Carpal Tunnel Syndrome / Median Nerve Compression",
      type: ["Chronic"],
      symptoms: ["Burning", "Loss of Motor Functions", "Numbness"],
      description:
        "Carpal tunnel syndrome, also known as median nerve compression, is a chronic condition that causes numbness or weakness in one’s hand. It happens due to pressure on the median nerve that controls movement and feeling in most of your fingers. It is caused by repetitive movements, such as typing. Women are much more likely than men to develop carpal tunnel, however it can affect anyone. There are a multitude of treatments available to help with symptom management, including lifestyle changes, exercises, medication, and surgery.",
    },
    {
      id: 73,
      name: "Sun Exposure (Sunburn)",
      type: ["Skin", "Physical"],
      symptoms: [
        "Blisters",
        "Fatigue",
        "Fever",
        "Headaches",
        "Nausea",
        "Pain",
        "Redness",
        "Skin Irritation",
        "Swelling",
      ],
      description:
        "Sun exposure, more commonly known as sunburn, is physical skin damage from overexposure to the sun without protective gear (clothes, umbrella, sunscreen). Constant overexposure can lead to wrinkling, age spots, and most dangerous an increased risk of skin cancer. There is no quick treatment for sunburn. It must take time to heal, but there are tools for pain management (cool baths, medications, plenty of fluids, avoiding further sun exposure). If there is blistering, lightly cover/bandage to prevent infection. Breaking the blisters will slow the healing process and increase the risk of infection.",
    },
    {
      id: 74,
      name: "Hypoglycemia",
      type: ["Chronic"],
      symptoms: [
        "Dizziness",
        "Fainting",
        "Fatigue",
        "Headaches",
        "Hunger",
        "Numbness",
        "Seizures",
        "Sweating",
        "Trouble Sleeping",
      ],
      description:
        "Hypoglycemia is a chronic condition caused by low blood sugar. Blood sugar is measured by the amount of glucose (main energy supply for the body) in the blood. It is most common with people who have diabetes. Those without diabetes might have hypoglycemia due to certain medication, certain diseases, malnutrition, substance abuse, or hormone issues. There are many options on how to treat symptoms and maintain a healthy blood sugar, so speak to a medical professional to find the option that is best for you.",
    },
    {
      id: 75,
      name: "Bacterial Vaginosis",
      type: ["Bacterial", "Infection"],
      symptoms: ["Burning", "Itching", "Pain", "Stomach Pain"],
      description:
        "Bacterial vaginosis is a vaginal infection caused by changes in the normal balance of vaginal bacteria. It is very common and rarely leads to other health issues, but it can cause issues with pregnancy (preterm birth, early rupture, miscarriage). It usually get worse without treatment, but it is easily treatable and options can be provided to you by a medical professional.",
    },
    {
      id: 76,
      name: "Scabies",
      type: ["Infestation", "Skin"],
      symptoms: ["Blisters", "Itching", "Skin Irritation", "Sores"],
      description:
        "Scabies is a skin infestation by a specific type of mite. These microscopic mites burrow in the top layer of your skin. They live and lay eggs here causing an itchy pimple-like rash. It spreads through direct skin-to-skin contact, and can spread rapidly in crowded situations. Symptoms can begin as long as 4 to 8 weeks after being infected, but for those who have had it before it can be as quick as 1 to 4 days. With or without symptoms, you are still able to spread the infection. There is a treatment for scabies, but you will need to see a medical professional to be prescribed the medication.",
    },
    {
      id: 77,
      name: "Hypothyroidism",
      type: ["Chronic", "Hormonal"],
      symptoms: [
        "Constipation",
        "Depression",
        "Dry Skin",
        "Fatigue",
        "Hair Loss",
        "High Cholesterol",
        "Muscle/Body Aches",
        "Pain",
        "Stiffness",
        "Swelling",
        "Weight Gain",
      ],
      description:
        "Hypothyroidism is a common chronic, hormonal condition, in which the thyroid gland does not make enough of the thyroid hormone. This can cause certain body processes to slow down, making your metabolism slower and creating less energy for your body. Hypothyroidism  can be treated. Although it usually takes time to find the correct dosage, a medical professional can prescribe medications that produce this hormone for your body, getting rid of the symptoms. However, it is important to follow your doctor’s directions, because missing or stopping the medication can cause symptoms to return.",
    },
    {
      id: 78,
      name: "Rosacea",
      type: ["Skin"],
      symptoms: [
        "Bumps",
        "Burning",
        "Dry Skin",
        "Itching",
        "Redness",
        "Sensitivity",
        "Swelling",
        "Vision Issues",
      ],
      description:
        "Rosacea is a skin condition where your skin looks red/flushed and can also look like small bumps with pus (similar to acne). There are four types of rosacea: erythematotelangiectatic (face redness), papulopustular (similar to acne), phymatous (thick/scarred skin), and ocular (affects the eyes).It can affect anyone and can be harder to diagnose for people with darker skin. It can be easily managed through medication and other treatments offered by a medical professional.",
    },
    {
      id: 79,
      name: "Hemorrhoids",
      type: ["Inflammation"],
      symptoms: ["Bumps", "Itching", "Pain"],
      description:
        "Hemorrhoids is when veins lining the anal canal become inflamed/swollen. It can happen to anyone and is very common. It is caused by increased pressure on the lower body, such as straining on the toilet, constipation, diarrhea, obesity, pregnancy, childbirth, and lifting heavy objects. Most cases are mild and can go away on their own. However, if symptoms are more severe, then it could lead to other complications (prolases & thrombosis) which would need medical attention.",
    },
    {
      id: 80,
      name: "Diverticulitis",
      type: ["Infection", "Inflammation"],
      symptoms: [
        "Constipation",
        "Diarrhea",
        "Fever",
        "Nausea",
        "Pain",
        "Tenderness",
        "Vomiting",
      ],
      description:
        "Diverticulitis is an inflammatory condition, where pouches that can form in the intestines (diverticula) become inflamed/infected. It ranges in severity and there are four types. Acute is easily treatable, while chronic has treatments but is reoccuring. Uncomplicated is the most common type and is also easily treatable. Complicated can cause other inflammation problems, such as a rupture. Treatment options range from rest and lots of liquids to surgery, so speak to a medical professional to see which options are needed for you.",
    },
    {
      id: 81,
      name: "Ovarian Cysts",
      type: ["Reproductive"],
      symptoms: [
        "Aching",
        "Bloating",
        "Frequent Urination",
        "Nausea",
        "Pain",
        "Pressure",
        "Swelling",
      ],
      description:
        "Ovarian cysts are pockets that are either fluid-filled or semi-solid on your ovaries. It is very common and most people do not exhibit any symptoms or even know they are there. A cysts is only dangerous if it is persistent, increases in size, or begins to hurt. Sometimes cysts rupture, this can just cause mild discomfort or it can be a medical emergency. The only treatment is to be vigilant. It will either go away on its own or need surgery. Pain and other symptoms can be managed through medications prescribed by a medical professional.",
    },
    {
      id: 82,
      name: "Testicular Torsion",
      type: ["Medical Emergency"],
      symptoms: [
        "Dizziness",
        "Frequent Urination",
        "Nausea",
        "Pain",
        "Redness",
        "Stomach Pain",
        "Swelling",
        "Vomiting",
      ],
      description:
        "Testicular torsion is a medical emergency, where a testicle twists around and cuts off blood flow to itself. The lack of blood flow will cause pain and swelling. Immediate treatment is necessary to save the testicle, prevent infertility, and other complications. While the condition itself is rare, most cases will need surgery to fix the testicular torsion.",
    },
    {
      id: 83,
      name: "Peptic Ulcers",
      type: ["Gastric"],
      symptoms: [
        "Bloating",
        "Burping",
        "Decrease in Appetite",
        "Nausea",
        "Vomiting",
        "Weight Loss",
      ],
      description:
        "A peptic ulcer is when there are open sores on the lining of the upper intestine or stomach. It is caused by bacteria, certain pain relief medications, and substance abuse which cause stomach acids to eat away at the protective layer of the digestive tract. It ranges in severity from no symptoms to mild discomfort to internal bleeding that needs medical attention. There are two types: gastric (stomach) and duodenal (top of small intestine). Some ulcers heal on their own, but without proper treatment they usually come back.",
    },
    {
      id: 84,
      name: "Human Papillomavirus (HPV)",
      type: ["Infection", "Sexually Transmitted Disease", "Viral"],
      symptoms: [
        "Common Warts",
        "Flat Warts",
        "Genital Warts",
        "Plantar Warts",
        "Skin Irritation",
      ],
      description:
        "Human papillomavirus, more commonly known as HPV, is a sexually transmitted viral infection. It is very common and most people don’t show any symptoms. It is not just one virus; there are over 100 different types, some of which are much more dangerous than others. High-risk versions of the virus can cause cervical cancer, while low-risk strains might cause genital warts. Some people with HPV might not even show symptoms and the infection could go away without treatment. Treatments available range greatly depending on the severity and strain of HPV. Speak with a medical professional to see which option is best for you.",
    },
    {
      id: 85,
      name: "Epilepsy",
      type: ["Neurological"],
      symptoms: ["Seizures"],
      description:
        "Epilepsy is a neurological condition where unusual electrical activity in the brain causes seizures. The seizures themselves are typically not dangerous, but the situations you could be in are (driving a vehicle, operating heavy machinery, hitting your head). The exact cause of epilepsy is unknown, however with medical help there are treatments (diet, medications, medical devices, surgery) available to keep seizures under control.",
    },
    {
      id: 86,
      name: "Gout",
      type: ["Chronic", "Inflammation"],
      symptoms: ["Heat on Skin", "Pain", "Redness", "Swelling"],
      description:
        "Gout is a common chronic inflammatory arthritis. It is very painful and usually only affects one joint at a time (typically the big toe joint). It is caused when there is too much uric acid in one’s body. Symptoms may flare up due to different reasons. There is no cure for gout and it must be diagnosed by a medical professional. However, gout can be properly treated and managed through medications as well as some lifestyle changes (healthy diet, limiting alcohol, be physically active, healthy weight loss, etc).",
    },
    {
      id: 87,
      name: "Coronary Artery Disease",
      type: ["Cardiovascular", "Heart Disease"],
      symptoms: ["Aching", "Burning", "Numbness", "Pressure"],
      description:
        "Coronary artery disease is the most common type of heart disease (and leading cause of death) in the United States. It is when plaque builds up inside arteries that supply blood to the heart. It can take a while to be dangerous, but without proper attention it can be fatal. Coronary artery disease becomes more likely with age, if it runs in your family, or with other risk factors (high cholesterol, high blood pressure, smoking/vaping, diabetes, autoimmune diseases, HIV, obesity, substance abuse, sleeping disorders, etc). Coronary artery disease can be treated through medications, procedures, and lifestyle changes (specified diet, stop smoking, be active, stay at a healthy weight, stress management, etc). However, the best thing to do is focus on prevention, such as regular doctor check-ups, maintaining a health weight, avoiding smoking, limiting alcohol, staying active, reducing stress, and diet (lots of fiber-rich foods and fatty fish; avoid salt and trans fats).",
    },
    {
      id: 88,
      name: "Endometriosis",
      type: ["Tissue Disease"],
      symptoms: [
        "Back Pain",
        "Constipation",
        "Cramps",
        "Diarrhea",
        "Fatigue",
        "Heavy Periods",
        "Infertility Issues",
      ],
      description:
        "Endometriosis is a tissue disease, when a tissue begins to grow outside of the uterus. It acts the same as the tissue inside of the uterus, so during a menstrual cycle (your period) it breaks apart and bleeds. However, because it is on the outside of the uterus, it has nowhere to go. This makes the surrounding areas can be swollen, inflamed, or have scar tissue/lesions. There are four different types depending on the part of the body that it affects, and four stages of the disease. Lifestyle changes (healthy diet, regular exercise, stress management, etc) can help reduce the pain. Experts are not quite sure what causes endometriosis, but without medical intervention it could worsen and cause severe complications, such as pain that affects daily life, mental health issues, ovarian cancer, and infertility.",
    },
    {
      id: 89,
      name: "Schizophrenia",
      type: ["Chronic", "Mental Condition"],
      symptoms: [
        "Delusions",
        "Hallucinations",
        "Lack of Interest in Normal Activities",
        "Movement Disorders",
        "Trouble Concentrating",
      ],
      description:
        "Schizophrenia is a chronic and severe mental disorder. It is not very common, but it affects the way a person thinks, acts, emotes, relates, and perceives reality. It is a type of psychosis where one cannot distinguish real from imaginary. First signs usually appear for men from late teens to early twenties and for women from early twenties and thirties. The periods of psychosis can last for days, wells, or even years. It is unclear what the exact cause is, but it affects all types of people. It is treated through a combination of medications and therapies, however it is an ongoing battle and can be very debilitating (can lead to substance abuse, issues with unemployment, financial problems, suicidal thoughts, and immense amounts of stress).",
    },
    {
      id: 90,
      name: "Polycystic Ovary Syndrome (PCOS)",
      type: ["Chronic", "Hormonal", "Reproductive"],
      symptoms: [
        "Acne",
        "Hair Loss",
        "Mood Swings",
        "Ovarian Cysts",
        "Pain",
        "Skin Tags",
        "Weight Gain",
      ],
      description:
        "Polycystic ovary syndrome, also known as PCOS, is a chronic hormonal condition that affects the ovaries by causing normal reproductive hormones to be out of balance. It is one of the most common causes of infertility. Most people do not even know they have PCOS due to a lack of exhibiting symptoms. While the condition never goes away, the symptoms tend to get better after menopause, and there are treatments available to relieve symptoms and help with pregnancy. Actual symptoms vary, but the most common is irregular menstrual cycles (periods). Speak with a medical professional to learn and understand more about different treatment options (vary greatly depending on whether or not you are trying to get pregnant).",
    },
    {
      id: 91,
      name: "Trichomoniasis",
      type: ["Sexually Transmitted Disease"],
      symptoms: [
        "Burning",
        "Burning while Urinating",
        "Frequent Urination",
        "Genital Itching/Burning",
        "Itching",
      ],
      description:
        "Trichomoniasis is a common STD. Oftentimes, people with trichomoniasis won’t display any symptoms, but without treatment the chances of getting/spreading other STDs greatly increases. Despite not displaying symptoms, anyone with this disease can spread it through contact between genitalia. Those who do display symptoms might not start to experience them until days or weeks after infection. Prescribed antibiotics from a medical professional should clear up the infection (good to wait 7-10 days and get tested again to avoid spreading the disease). To lower your risk of getting trichomoniasis use condoms, avoid douching, talk openly with partners you trust (ask if they have tested negative for STDs).",
    },
    {
      id: 92,
      name: "Interstitial Cystitis",
      type: ["Bladder Syndrome", "Chronic"],
      symptoms: [
        "Frequent Urination",
        "Groin Pressure/Pain",
        "Pain",
        "Stomach Pain",
        "Ulcers",
      ],
      description:
        "Interstitial cystitis is a chronic bladder condition. It makes it painful to hold your pee, so people with interstitial cystitis might have to pee up to 60 times a day. Symptoms greatly vary in severity and frequency, and sometimes they can even go away. If you are experiencing urinary pain for more than 6 weeks, a medical professional would have to rule out a multitude of other options before being able to diagnose you with interstitial cystitis and give you proper treatment options.",
    },
    {
      id: 93,
      name: "Candidiasis (Yeast Infection)",
      type: ["Fungal", "Infection"],
      symptoms: [
        "Burning while Urinating",
        "Genital Itching/Burning",
        "Pain",
        "Skin Irritation",
        "Swelling",
      ],
      description:
        "Candidiasis, more commonly known as a yeast infection, is very common and is caused by a fungus. It typically causes the vaginia and vulva to itch, swell, or even burn. In some cases, the swelling is so severe that it leads to sores. Both women and men can get yeast infections. Over-the-counter creams, medications, and suppositories are available to help clear up the infection. However, if symptoms become more severe, you might need a medication prescribed by a medical professional.",
    },
    {
      id: 94,
      name: "Appendicitis",
      type: ["Infection", "Medical Emergency"],
      symptoms: [
        "Constipation",
        "Decrease in Appetite",
        "Diarrhea",
        "Fever",
        "Nausea",
        "Stomach Pain",
        "Vomiting",
      ],
      description:
        "Appendicitis is a medical emergency, where one’s appendix becomes infected/inflamed. Surgical intervention is necessary, because if your appendix bursts then the infection could enter the bloodstream, which is deadly. It is caused when there is something blocking the appendix which allows bacteria to grow at an uncontrollable rate. It will start with a severe stomach pain (to the right of your belly button) and will get worse with movement. If you believe you have appendicitis, you should seek medical attention immediately.",
    },
    {
      id: 95,
      name: "Liver Cirrhosis",
      type: ["Chronic", "Liver Disease"],
      symptoms: [
        "Bleeding",
        "Cramps",
        "Decrease in Appetite",
        "Fatigue",
        "Fever",
        "Hair Loss",
        "Jaundice",
        "Lowered Labido",
        "Nausea",
        "Stomach Pain",
        "Swelling",
        "Trouble Concentrating",
        "Trouble Sleeping",
        "Vomiting",
        "Weight Loss",
      ],
      description:
        "Liver Cirrhosis is a chronic liver disease, where scar tissue slowly replaces healthy liver tissue. When the liver is damaged, it heals itself and creates scar tissue. If this happens often, then there will be too much scar tissue for the liver to function properly. It takes a long period of time to occur and is caused by liver problems or other diseases, such as alcohol abuse, fatty liver disease, Hepatitis B or C, or cryptogenic cirrhosis. Without proper care, complications, such as portal hypertension, varices, fluid buildup, liver cancer, and infections, could occur. To take the best possible care of your liver: eat a health diet, get vaccinated, be mindful of medications, and minimize (preferably end) alcohol consumption.",
    },
    {
      id: 96,
      name: "Scoliosis",
      type: ["Chronic", "Physical"],
      symptoms: [
        "Back Pain",
        "Difficulty Breathing",
        "Fatigue",
        "Numbness",
        "Pain",
        "Stiffness",
        "Uneven Shoulders/Hips",
        "Visible Back Curve",
      ],
      description:
        "Scoliosis is a chronic spinal deformity (curve in your backbone). There is no way to prevent scoliosis, and there are four different types. The first is idiopathic scoliosis, meaning there is no known cause (80% of cases). The second is congenital scoliosis, which starts developing before one is born. Third there is neuromuscular scoliosis, which is caused by other disorders, such as spina bifida, cerebral palsy, or an injury to the spinal cord. Lastly, there is degenerative scoliosis, which is when disks and joints begin to wear out with age. For mild scoliosis, treatment might not be necessary. However, for more severe cases, treatment options include braces, spinal fusion surgery, or a spine and rib-based growing operation. Talk with a medical professional to learn more about these options.",
    },
    {
      id: 97,
      name: "Myasthenia Gravis",
      type: ["Autoimmune", "Chronic", "Neuromuscular"],
      symptoms: [
        "Double Vision",
        "Droopy Eyelids",
        "Loss of Motor Functions",
        "Shortness of Breath",
        "Slurred Speech",
        "Trouble Chewing/Swallowing",
        "Weakness in Jaw/Throat",
      ],
      description:
        "Myasthenia gravis is a chronic autoimmune neuromuscular disease. It makes specific muscles become weakened after use. The muscle fatigue can vary and tends to get better with rest. It disrupts the signals between your nerves and muscles, making it difficult to move voluntarily sometimes. The exact cause is unknown but anyone can get myasthenia gravis. It is a treatable disease that becomes easier to manage over time. If you are experiencing symptoms, see a medical professional for tests to receive a proper diagnosis. They will be able to provide medication that can help with pain management. Some ways to take care of yourself with this illness is through good nutrition, proper exercise, rest, and knowing your triggers.",
    },
    {
      id: 98,
      name: "Inguinal Hernia (Direct Hernia)",
      type: ["Abdominal", "Physical"],
      symptoms: ["Aching", "Groin Pressure/Pain", "Stomach Pain", "Swelling"],
      description:
        "An inguinal hernia is when the tissue inside the abdomen sticks through the muscle (in a weak spot). Direct hernias can develop in adults due to a weakened spot in the abdominal wall, abdominal pressure, straining from activities or using the bathroom, pregnancy, and over coughing/sneezing. They can be mild or severe, so if you have abdominal or groin pain when coughing or lifting something heavy, then you should go see a medical professional for a physical exam. Those who are older, white, male, have chronic coughs or constipation, or do frequent strenuous activities are at a higher risk of developing a hernia. Hernias do not go away on their own, and usually get bigger over time. If there is little discomfort, then there is no need for immediate treatment, but it will need to be medically addressed at some point.",
    },
    {
      id: 99,
      name: "Dengue Fever",
      type: ["Blood", "Viral"],
      symptoms: [
        "Bleeding",
        "Fatigue",
        "Fever",
        "Headaches",
        "Joint/Muscle Pain",
        "Nausea",
        "Pain Behind Eyes",
        "Skin Irritation",
        "Vomiting",
      ],
      description:
        "Dengue fever is a painful and severe disease caused by any of the four dengue viruses. Most of the cases in the United States are from those who contracted the virus while traveling abroad. However, the number of cases in the U.S. has been on the rise. It is transmitted by an Aedes mosquito bite (bites an infected person, then bites an uninfected person). Symptoms typically begin within 4 to 6 days of infection and can last up to 10 days. Without proper attention, dengue fever can lead to serious complications. The most dangerous is dengue hemorrhagic fever which can cause circulatory system failure and lead to dengue shock syndrome (DSS), which is massive bleeding, shock, and then death. Dengue fever is diagnosed with a blood test and there is no specific medicine to treat it. You should avoid medications with aspirin, because they could make the bleeding worse. The best prevention is using mosquito repellents and other techniques (long sleeves, pants tucked into socks, etc.) in order to avoid mosquito bites. If you believe you have dengue fever, you should speak with a medical professional immediately.",
    },
    {
      id: 100,
      name: "Pertussis (Whooping Cough)",
      type: ["Bacterial", "Respiratory"],
      symptoms: [
        "Cough",
        "Difficulty Breathing",
        "Fever",
        "Runny Nose",
        "Vomiting",
      ],
      description:
        "Pertussis, more commonly known as whooping cough, is a very contagious respiratory illness that is caused by a bacteria called Bordetella pertussis. The bacteria attach to the upper respiratory system and release toxins that damage the airway. It spreads through the air when an infected person sneezes or coughs. Those infected are contagious from the start of symptoms (even mild ones) for at least 2 weeks. Early symptoms resemble a cold so it can be hard for medical professionals to diagnose. The best prevention from whooping cough is to get vaccinated and use basic health and hygiene practices. Pertussis can be severe and lead to other complications, so it is important to see a medical professional as soon as possible and take any antibiotics prescribed exactly as directed by the doctor.",
    },
  ];

  function Card1() {
    return (
      <Card>
        <Card.Body style={cardStyle}>
          <h3>
            Click on an illness for more information, and use the filters to get
            more specific!
          </h3>
          <br />
          <FilteredList items={data} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <div style={backgroundStyle}>
      <div>
        <Disclaimer2 />
        <br />
        <Card1 />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Learn;
