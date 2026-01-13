export async function POST(request: Request) {
  try {
    const { sectionType, title } = await request.json()

    // Comprehensive mock data for each section
    const mockResponses: Record<string, string> = {
      problem: `Rural Development Challenge: The Digital Divide in India

Rural India faces significant challenges in accessing government schemes and subsidies. With over 900 million rural residents, approximately 60% lack basic digital literacy. Key statistics:

• 65% of farmers are unaware of available government schemes
• Agricultural workers miss 75% of relevant subsidies due to information gaps
• Digital access in rural areas is 3x lower than urban centers
• Only 35% of eligible rural families benefit from government programs

The Problem:
Government schemes for agriculture, healthcare, education, and social welfare reach less than 40% of eligible beneficiaries. Information dissemination remains primarily through:
- Printed notices at block offices (requiring travel)
- Television announcements (inadequate coverage)
- Word of mouth (leads to misinformation)

Language Barrier: 78% of rural populations are more comfortable in regional languages, but only 15% of government resources are available in regional languages.

Information Asymmetry: Government schemes change quarterly, but rural populations learn about updates only through unreliable channels.

VoiceConnect Solution: By leveraging AI voice technology in regional languages, we can bridge this gap and enable real-time access to government schemes, subsidies, and opportunities.`,

      data: `Data Analysis: Rural Demographics and Impact Potential

Current Rural Statistics:
• Total rural population: 900 million across 600,000+ villages
• States covered: 28 (including all major agricultural regions)
• Literacy rate: 58% (vs 78% urban)
• Digital access: 22% (vs 73% urban)

Government Scheme Awareness:
• PM-KISAN: Only 42% of eligible farmers know about it
• National Agricultural Subsidy: 35% awareness
• Scholarship schemes: 28% awareness among eligible students
• Health programs: 45% awareness

Target Beneficiaries:
• Small and marginal farmers: 120 million
• Agricultural workers: 85 million
• Self-employed: 65 million
• Women entrepreneurs: 45 million
Total addressable market: 315 million people

Cost Effectiveness:
• Cost per call: ₹2-3 (voice technology at scale)
• Traditional awareness campaign: ₹15-20 per person
• Government savings: 85% reduction in administrative costs
• Reach efficiency: 10x higher engagement

Projected Impact (12 months):
• Direct reach: 52 million people
• Applications processed: 8.5 million
• Scheme applications: 6.2 million
• Government budget savings: ₹450 crores
• Average benefit per family: ₹28,000

Scalability: The system can be expanded to 28 states with a linear growth model, potentially reaching 315 million people by year 3.`,

      video: `Video Demonstration Walkthrough: VoiceConnect System Architecture

System Components:
1. Voice Input Layer
   - IVR (Interactive Voice Response) system
   - Multi-language speech recognition (12+ languages)
   - Voice quality: 99.2% clarity rating
   - Handles accents and dialects

2. Processing Layer
   - AI-powered Natural Language Understanding
   - Government scheme matching engine
   - Real-time database integration
   - Response generation in 0.8-1.2 seconds average

3. Information Delivery
   - Personalized scheme recommendations
   - Application assistance and form filling
   - Document requirements explanation
   - Step-by-step guidance

4. Integration Layer
   - Direct connection to government databases
   - Real-time scheme availability
   - Eligibility verification
   - Application submission support

Technical Performance:
• Call quality: 99.2% clarity
• Processing accuracy: 94%
• Call success rate: 93%
• Languages supported: 12
• Peak capacity: 50,000 simultaneous calls

User Experience Flow:
1. User dials a toll-free number
2. AI greets in preferred language
3. User states their query
4. AI identifies relevant schemes
5. Personalized recommendations provided
6. Application assistance offered
7. Follow-up reminders scheduled

The system is designed for non-technical users with minimal digital literacy.`,

      audio: `Audio Capabilities: Multi-Language Support and Voice Quality

Supported Languages:
• Hindi (native for 340 million)
• Bengali (230 million speakers)
• Marathi (83 million)
• Telugu (74 million)
• Gujarati (50 million)
• Kannada (44 million)
• Malayalam (34 million)
• Punjabi (93 million)
• Odia (42 million)
• Tamil (70 million)
• Urdu (51 million)
• English (for educated users)

Voice Quality Features:
• Natural speech synthesis with accents
• Emotional tone adjustment
• Gender options (male/female)
• Elderly-friendly speech patterns
• Agriculture-specific vocabulary
• Regional dialect support

Audio Optimization:
• Compression: 8 kbps with clarity
• Works on 2G networks
• File size: 50KB per call
• Real-time processing
• Echo cancellation

Accessibility:
• Supports hearing impairments with transcript
• Text-to-speech for deaf assistance
• Field worker vocabulary built-in
• Cultural sensitivity in tone
• Respect for gender preferences

Testing Results:
• User comprehension: 96%
• Elderly user satisfaction: 92%
• Regional language accuracy: 98%
• Accent recognition: 94%`,

      impact: `Social and Economic Impact Assessment

Direct Beneficiaries (12 months):
• Rural families reached: 52.4 million
• Government scheme applications: 8.5 million
• Scholarship applications filed: 1.2 million
• Agricultural subsidy applications: 3.2 million
• Healthcare scheme enrollments: 2.1 million

Economic Benefits:
• Average benefit per family: ₹28,000 (annual)
• Total economic benefit: ₹1.47 trillion
• Government budget savings: ₹450 crores
• Administrative cost reduction: 85%
• ROI for government: 380%

Social Impact:
• Women's empowerment: 18 million women gained independence
• Education access: 2.3 million students enrolled in schemes
• Health coverage: 5.2 million got access to health programs
• Agricultural productivity: 14% increase in farmland productivity
• Gender equity: 42% women beneficiaries

Employment Generation:
• Field coordinators trained: 15,000
• Technical staff: 2,500
• Customer support: 8,000
• Total jobs created: 25,500

SDG Alignment:
• SDG 1: No Poverty - Direct poverty reduction of 12%
• SDG 3: Good Health - 5.2 million health insurance
• SDG 4: Quality Education - 2.3 million school/college enrollments
• SDG 5: Gender Equality - 42% women beneficiaries
• SDG 10: Reduced Inequalities - Digital divide narrowing

Long-term Vision:
• Year 1: 52 million reach (current)
• Year 2: 150 million reach
• Year 3: 315 million reach (full rural India)
• Year 5: Expansion to urban underserved populations`,

      disclaimer: `Technical and Ethical Disclaimers

Data Privacy and Security:
• End-to-end encryption (AES-256)
• GDPR compliant data handling
• No personal data stored beyond session
• Automatic data deletion after 90 days
• User consent required for all interactions
• Privacy policy available in 12 languages

AI Limitations:
• Accuracy rate: 94% (6% error margin)
• Complex cases require human verification
• Real-time scheme data dependent on government updates
• Voice recognition accuracy: 94-98% depending on audio quality
• Regional dialects may need clarification

Regulatory Compliance:
• Compliant with Indian POPIA (Personal Data Protection Act)
• Follow government e-governance standards
• TRAI regulations for telecom interfaces
• RBI guidelines for financial data
• State-specific privacy laws

Legal Requirements:
• Official documents require human verification
• AI recommendations are informational only
• Not a substitute for official government channels
• Application status requires verification
• No guarantee of scheme approval

Limitations:
• Dependent on government database updates
• Subject to scheme policy changes
• Not responsible for government rejections
• Accuracy limited by audio quality
• Requires working phone line

Human Verification:
• Recommended for final applications
• Available 24/7 support hotline
• Government verification required
• Community coordinators for assistance
• Grievance redressal mechanism

Improvements Planned:
• Voice quality enhancement (Phase 2)
• Video verification support
• Offline capability for rural areas
• Biometric integration
• Real-time scheme updates`,

      video_demo: `VoiceConnect System Demonstration: Complete Walkthrough

System Architecture Overview:
The VoiceConnect platform consists of four integrated layers:

1. INPUT LAYER (Voice Capture)
   - Toll-free number: 1-800-VOICE-CONNECT
   - 24/7 availability
   - Support for all major telecom networks
   - Automatic language detection
   - Noise cancellation: 95% effective

2. PROCESSING LAYER (AI Intelligence)
   - NLP Engine: Understands 12,000+ scheme-related queries
   - Intent Recognition: 98% accuracy
   - User Context Building: Learns preferences
   - Real-time Database Integration
   - Response Generation: <1.2 seconds average

3. OUTPUT LAYER (Information Delivery)
   - Personalized scheme matching
   - Step-by-step guidance
   - Document requirements
   - Application assistance
   - SMS/WhatsApp follow-up

4. INTEGRATION LAYER (Government Connection)
   - Direct PFMS integration
   - Real-time scheme eligibility check
   - Online application submission
   - Status tracking
   - Document verification

End-to-End User Journey:
User dials toll-free → AI greets in regional language → User states needs → AI asks clarifying questions → System matches 50+ schemes → Recommendations provided → Application assistance → Form filling help → Submission confirmation → SMS follow-up → Application tracking available

Technical Performance Metrics:
• Call processing time: 0.8-1.2 seconds
• Voice quality: 99.2% clarity
• Accuracy rate: 94%
• System uptime: 99.98%
• Concurrent calls: 50,000
• Daily capacity: 2 million calls

Database Integration:
• Government schemes: 540+ schemes indexed
• Eligibility criteria: Real-time update
• State variations: All 28 states covered
• Language support: 12 major languages
• Mobile responsiveness: Available on app

Error Handling:
• Human transfer for complex cases
• Automatic fallback to regional language
• Recorded interaction for review
• User feedback mechanism
• Continuous improvement loop`,

      conclusion: `Future Vision: VoiceConnect - Digital Inclusion for 315 Million

Key Achievements & Milestones:
• Phase 1 (Completed): 52.4 million reach in 12 months
• Phase 2 (2025): Expansion to 150 million beneficiaries
• Phase 3 (2026): Full rural India coverage (315 million)
• Economic impact: ₹1.47 trillion in direct benefits

Expansion Plans:
• Timeline: 3-year rollout across all Indian states
• Investment required: ₹500 crores
• ROI: 380% in first 5 years
• Scalability: Linear expansion model proven

Partnership Opportunities:
1. Government Partnerships
   - Ministry of Rural Development
   - State Agriculture Departments
   - NRLM (National Rural Livelihood Mission)
   - CSC e-Governance Services India

2. Telecom Partnerships
   - BSNL, Jio, Airtel, Vi
   - Integration with USSD/IVR networks
   - Network optimization agreements
   - Revenue sharing model

3. NGO & CSO Collaborations
   - Field coordinators from NGOs
   - Community engagement programs
   - Microfinance institution links
   - Women self-help groups

4. Financial Institutions
   - Banks for loan scheme integration
   - Insurance companies
   - Microfinance institutions
   - Payment gateway integration

Funding and Investment Prospects:
• Total funding required: ₹500 crores (₹150cr + ₹350cr operational)
• Expected ROI: 380% (5-year horizon)
• Payback period: 18 months
• Annual operational cost: ₹70 crores
• Break-even point: Month 16

Scaling Strategy:
• Current: 28 states (54% population coverage)
• Year 1: Expand to urban underserved (+ 120 million)
• Year 2: International expansion (South Asian region)
• Year 3: Global adaptation for developing markets

Long-term Vision:
VoiceConnect represents a paradigm shift in digital inclusion, proving that technology can be human-centric and accessible to all. By 2030, we envision a world where every citizen, regardless of digital literacy, can access all government benefits through their voice.

Sustainability:
• Self-sustaining revenue model through government contracts
• Scalable infrastructure with minimal per-user cost
• Community ownership model in villages
• Technology transfer to government agencies
• Open-source components for transparency`,
    }

    const content = mockResponses[sectionType] || mockResponses.problem

    return Response.json({ content, title }, { status: 200 })
  } catch (error) {
    console.error("Analysis error:", error)
    return Response.json({ error: "Failed to generate analysis" }, { status: 500 })
  }
}
