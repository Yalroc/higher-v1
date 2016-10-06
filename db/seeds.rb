JobApplication.destroy_all
Language.destroy_all
Experience.destroy_all
Education.destroy_all
JobOffer.destroy_all
JobOfferFolder.destroy_all
Candidate.destroy_all
Recruiter.destroy_all
Organization.destroy_all

Candidate.create!({
  first_name: "Thibault",
  last_name: "Dupont",
  email: "thd@gmail.com",
  password: "123456",
  phone_number: "+33 6 78 94 35 66",
  })

loreal = Organization.create!({
  name: "L'Oréal",
  size: 74000,
  industry: "Cosmetics",
  })

t_delas = Recruiter.create!({
  email: "t.delas@loreal.com",
  password: "123456",
  title: "Thierry Delas Senior Recruiter",
  organization: loreal,
  })



# 3 JOB OFFERS & FOLDERS

digital_folder = JobOfferFolder.create!({
  name: "Digital",
  open: true,
  organization: loreal,
  })

social_folder = JobOfferFolder.create!({
  name: "Social",
  open: true,
  organization: loreal,
  parent: digital_folder,
  })

finance_folder = JobOfferFolder.create!({
  name: "Finance",
  open: true,
  organization: loreal,
  })


JobOffer.create!({
  organization: loreal,
  recruiter: t_delas,
  title: "Community Manager",
  description: "We are currently looking to hire 1 experienced (Senior) Sales Director for our Consulting Services Line of Business in France.  In this role you will have responsibility for all consulting bookings in France, either through managing the group of French Consulting Sales Representatives (Field & Inside) or by performing sales directly with specific focus on SaaS, IaaS and PaaS solutions.",
  location: "Paris",
  min_xp: 1,
  max_xp: 3,
  salary: 35,
  job_offer_folder: social_folder,
  published: true,
  })

JobOffer.create!({
  organization: loreal,
  recruiter: t_delas,
  title: "Digital Marketing Manager",
  job_offer_folder: digital_folder,
  description: "
    Description

    As a leading worldwide provider of navigation devices and wearable technology, our focus is on developing, designing and supporting superior products. Our advanced technology promotes performance, safety and ease of use in every market we serve. That makes us an engineering and technology company with a keen focus on recruiting talent in those fields. But the same vertical integration business model that keeps all design and manufacturing processes in-house also gives us the incentive to hire top performers from different backgrounds, including operations, finance and accounting, information technology, sales, marketing and communications.


    We're looking for a Digital Marketing Manager at our world headquarters in Olathe, KS to manage the execution of the strategic vision, coordination, and implementation of digital marketing efforts for retail partners.


    In this role, your key essential functions will be:
    - Develop and execute the strategic vision for digital marketing for retail partners including advertisements, promotions, banners, homepage takeovers, brand landing pages, emails, social posts, and search words
    - Work directly with retail partners to improve the end customer shopping experience
    - Assess effectiveness of campaigns through calculating ROI, and change/optimize accordingly to maximize sales and brand exposure
    - Work closely with sales leaders to ensure an aligned digital strategy
    - Manage 3rd party digital content agreements to maximize contract allowances
    - Maintain strong product knowledge across all products in consumer segments

    You will also be responsible for the following:
    Some travel required, as necessary, to attend dealer marketing conferences, vendor meetings and industry shows.",
  location: "Paris",
  min_xp: 5,
  max_xp: 10,
  salary: 52,
  published: true,
  })

JobOffer.create!({
  organization: loreal,
  recruiter: t_delas,
  job_offer_folder: digital_folder,
  title: "SEO expert",
  description: "This is not your typical Internal Audit position. As an Internal Auditor for the country's leading nuclear organisation, you will have the opportunity to take part in incredibly varied and highly complex audits, within an extremely visible role in the business.


Details about the Client

Sellafield is the company responsible for safely delivering decommissioning of the UK's nuclear legacy as well as fuel recycling and the management of low, high and intermediate level nuclear waste activities. With a number of significant developments taking place across the business you will gain rare insight into an organisation going through substantial change. The projects they're involved with are globally significant and they take pride of the high standards they keep to, encouraging responsible actions and ensuring a positive reflection on the nuclear industry as a whole.


Detailed Job Description

A recent change in ownership means an increased focus on the importance of Internal Audit's role in helping to shape and guide Sellafield's future direction. These changes have encouraged more emphasis on strategy and transformation within the Audit Plan. Engaging with senior stakeholders across the business requires a talented auditor who is not afraid to be proactive and challenge influential individuals on a regular basis. Identifying individuals who are autonomous as well as innovative is vital.

Sellafield's Internal Audit function has a remit to provide assurance and advice across all areas of the business from corporate governance to project management and human resources to shared services. The calibre of the team has seen Internal Audit become well respected across the organisation ensuring that all levels are receptive to their input.

From day one you will take full responsibility for a varied portfolio of risk based audit reviews; using your ability to think strategically and outside of the box, you will be challenged to identify commercial and practical solutions to control issues and then present back to the business. You will also be tasked with proactively identifying potential areas for further review within the business, and then feed this into the planning process. You will have exposure to individuals at all levels but particularly at Executive and Board level, with all reviews having an Executive sponsor with whom you would be partnering.

The interaction you will have across disciplines allows you the opportunity to use the experience gained in this role as a springboard to a variety of internal opportunities. Exceptional performers have moved to senior roles in finance, commercial and operations across the Sellafield business and have also had the opportunity to gain international experience.


Candidate's Profile

Our client is looking for talented auditors who are proactive, innovative and autonomous.

The successful candidate should meet the following criteria:

Qualified Chartered Accountant or Auditor (ACA or CMIIA) with 3 years post qualification experience (PQE)
Ideally your PQE will be in Internal Audit, or External Audit dealing with large, complex clients
A demonstrable, strong academic track record
Self-motivated and keen to use their initiative to problem-solve
Excellent interpersonal and communication skills with an ability to build strong relationships and influence senior stakeholders across all levels
Your success in the role will be determined by your ability to:

Think strategically
Work proactively
Build effective relationships at all levels",

  location: "Paris",
  min_xp: 8,
  max_xp: 12,
  salary: 70,
  published: true,
  })

JobOffer.create!({
  organization: loreal,
  recruiter: t_delas,
  job_offer_folder: finance_folder,
  title: "M&A Analyst",
  description: "This is not your typical Internal Audit position. As an Internal Auditor for the country's leading nuclear organisation, you will have the opportunity to take part in incredibly varied and highly complex audits, within an extremely visible role in the business.


Details about the Client

Sellafield is the company responsible for safely delivering decommissioning of the UK's nuclear legacy as well as fuel recycling and the management of low, high and intermediate level nuclear waste activities. With a number of significant developments taking place across the business you will gain rare insight into an organisation going through substantial change. The projects they're involved with are globally significant and they take pride of the high standards they keep to, encouraging responsible actions and ensuring a positive reflection on the nuclear industry as a whole.


Detailed Job Description

A recent change in ownership means an increased focus on the importance of Internal Audit's role in helping to shape and guide Sellafield's future direction. These changes have encouraged more emphasis on strategy and transformation within the Audit Plan. Engaging with senior stakeholders across the business requires a talented auditor who is not afraid to be proactive and challenge influential individuals on a regular basis. Identifying individuals who are autonomous as well as innovative is vital.

Sellafield's Internal Audit function has a remit to provide assurance and advice across all areas of the business from corporate governance to project management and human resources to shared services. The calibre of the team has seen Internal Audit become well respected across the organisation ensuring that all levels are receptive to their input.

From day one you will take full responsibility for a varied portfolio of risk based audit reviews; using your ability to think strategically and outside of the box, you will be challenged to identify commercial and practical solutions to control issues and then present back to the business. You will also be tasked with proactively identifying potential areas for further review within the business, and then feed this into the planning process. You will have exposure to individuals at all levels but particularly at Executive and Board level, with all reviews having an Executive sponsor with whom you would be partnering.

The interaction you will have across disciplines allows you the opportunity to use the experience gained in this role as a springboard to a variety of internal opportunities. Exceptional performers have moved to senior roles in finance, commercial and operations across the Sellafield business and have also had the opportunity to gain international experience.


Candidate's Profile

Our client is looking for talented auditors who are proactive, innovative and autonomous.

The successful candidate should meet the following criteria:

Qualified Chartered Accountant or Auditor (ACA or CMIIA) with 3 years post qualification experience (PQE)
Ideally your PQE will be in Internal Audit, or External Audit dealing with large, complex clients
A demonstrable, strong academic track record
Self-motivated and keen to use their initiative to problem-solve
Excellent interpersonal and communication skills with an ability to build strong relationships and influence senior stakeholders across all levels
Your success in the role will be determined by your ability to:

Think strategically
Work proactively
Build effective relationships at all levels",

  location: "Paris",
  min_xp: 8,
  max_xp: 12,
  salary: 70,
  published: true,
  })

# THIBAULT DUPONT'S JOB APPLICATION

JobApplication.create!({
  candidate: Candidate.first,
  job_offer: JobOffer.first,
  motivation_letter: "Dear Sir or Madam, I am writing in response to your advertisement for a Sales Director for your Consulting Services Line of Business in France. I have done many roles in the same field of skills required by your proposition.",
  submit: true,
  created_at: "30-8-2016",
  fit: rand(50.0..99.9).round(1)
  })

Language.create!({
  job_application: JobApplication.first,
  name: "French",
  proficiency: "Native"
  })

Language.create!({
  job_application: JobApplication.first,
  name: "English",
  proficiency: "Fluent"
  })

Experience.create!({
  organization: "Unilever",
  job_application: JobApplication.first,
  title: "Category Manager",
  start_date: "1-6-1994",
  end_date: "1-8-2015",
  description: "I managed a team of 10 account managers.",
  company_size: 100000,
  industry: "Computer Software"
  })

Experience.create!({
  organization: "Carrefour",
  job_application: JobApplication.first,
  title: "Product Manager",
  start_date: "1-2-1980",
  end_date: "1-11-1990",
  description: "I managed a team of 10 account managers.",
  company_size: 100000,
  industry: "Computer Software"
  })

Education.create!({
  organization: "ESSEC Business School",
  job_application: JobApplication.first,
  start_date: "1-6-1992",
  degree_type: "Master",
  degree_field: "Grande Ecole",
  end_date: "1-8-1995",
  description: "I graduated from this business school which belongs to the top 10 in Europe.",
  })

####################################################

Candidate.create!({
  first_name: "Isabelle",
  last_name: "Cheminet",
  email: "isa@gmail.com",
  password: "123456",
  phone_number: "+33 6 78 94 35 66",
  })

JobApplication.create!({
  candidate: Candidate.second,
  job_offer: JobOffer.first,
  submit: true,
  motivation_letter: "Dear Sir or Madam, I am very interested by your proposition. I have worked for more than ten years in the IT field, so I think I have enough experience to get this position.",
  created_at: "31-8-2016",
  fit: rand(50.0..99.9).round(1)
  })

Language.create!({
  job_application: JobApplication.second,
  name: "French",
  proficiency: "Native"
  })

Language.create!({
  job_application: JobApplication.second,
  name: "English",
  proficiency: "TOEIC 950"
  })

Language.create!({
  job_application: JobApplication.second,
  name: "Chinese",
  proficiency: "Intermediate"
  })

Experience.create!({
  organization: "Publicis",
  job_application: JobApplication.second,
  title: "Communication Assistant",
  start_date: "1-6-2002",
  end_date: "1-6-2016",
  description: "I was charged of the middle market clients.",
  company_size: 100000,
  industry: "Computer Software"
  })

Education.create!({
  organization: "Université Paris Dauphine",
  job_application: JobApplication.second,
  start_date: "1-6-1996",
  degree_type: "Master",
  degree_field: "in Finance",
  end_date: "1-6-2001",
  description: "I have a specialization in IT services.",
  })

#######
########



Candidate.create!({
  first_name: "Edouard",
  last_name: "Foussier",
  email: "edf@gmail.com",
  password: "123456",
  phone_number: "+33 9 31 94 88 66",
  })

JobApplication.create!({
  candidate: Candidate.find_by(last_name: "Foussier"),
  job_offer: JobOffer.third,
  submit: true,
  motivation_letter: "Yolo",
  fit: rand(50.0..99.9).round(1)
  })

Language.create!({
  job_application: JobApplication.find_by(motivation_letter: "Yolo"),
  name: "English",
  proficiency: "Native"
  })

Language.create!({
  job_application: JobApplication.find_by(motivation_letter: "Yolo"),
  name: "French",
  proficiency: "Fluent"
  })

Experience.create!({
  organization: "Le Wagon",
  job_application: JobApplication.find_by(motivation_letter: "Yolo"),
  title: "All things community",
  start_date: "1-6-2012",
  end_date: "1-8-2016",
  description: "Le Wagon Lover",
  company_size: 100000,
  industry: "Corporate Law"
  })

Education.create!({
  organization: "ESCP Europe",
  job_application: JobApplication.find_by(motivation_letter: "Yolo"),
  start_date: "1-6-1996",
  end_date: "1-6-2001",
  description: "My specialization is about computer science.",
  degree_type: "Master",
  degree_field: "Computer Science",
  })


##################

######## LOOPED JOB APPLICATION ######


105.times do

  candidate = Candidate.create!({
  first_name: Faker::Name.name.split(" ")[0],
  last_name: Faker::Name.name.split(" ")[0],
  email: Faker::Internet.email,
  password: "123456",
  phone_number: "+33 9 31 94 88 66",
  })

  job_app = JobApplication.create!({
  candidate: Candidate.find(candidate),
  job_offer: JobOffer.third,
  motivation_letter: "Dear Sir,
  I really want to work with you because i am the bezst fit for you, trust me !",
  created_at: "1-9-2016",
  viewed: [true, nil].sample,
  submit: true,
  fit: rand(50.0..94.9).round(1)
  })

  rand(1..5).times do
    Education.create!({
      organization: Faker::Educator.university,
      job_application: job_app,
      title: Faker::Educator.course,
      start_date: "1-6-2007",
      end_date: "1-8-2010",
      description: "Martial Arts Training",
      degree_type: ["High School Diploma", "Bachelor", "Master", "PhD & equivalent", "Executive Education", "Other"].sample,
      degree_field: Faker::Book.genre,
      })
  end

  rand(1..5).times do
    Experience.create!({
      organization: Faker::Company.name,
      job_application: job_app,
      title: Faker::Company.profession.capitalize,
      start_date: "1-6-1999",
      end_date: "1-6-2002",
      description: "I worked within a team of 12 collaborators. I was personally in charge of analyzing KPIs of several categories of products and writing reports and recommandations about it.",
      company_size: 100000,
      industry: "Marketing"
      })
  end

  rand(1..5).times do
    Language.create!({
      job_application: job_app,
      name: ["French", "English", "Spanish", "Dutch", "German", "Danish", "Polish"].sample,
      proficiency: ["Elementary proficiency", "Limited working proficieny", "Professional working proficiency", "Full professional proficiency", "Native or bilingual proficiency"].sample
      })
  end


end














