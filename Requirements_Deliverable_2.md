# Parking Space Sharing Platform Requirements Document

## 1. Purpose
The purpose of this document is to define the functional and system requirements for the Parking Space Sharing Platform. The platform aims to address traffic congestion issues due to parking issue near University Avenue by providing a system for real-time parking availability, community parking space sharing, and improved user experience.

## 2. Scope
The Parking Space Sharing Platform is designed to serve drivers, residents, and businesses in the University Avenue area. It will provide:
- Real-time parking availability information via mobile apps.
- A platform for residents and businesses to list unused parking spaces.
- A seamless reservation and payment system for parking spots.  

**Validation of Requirements** : These are provided by Research support

---

## 3. Functional Requirements

**FR1: The system shall provide real-time updates on parking spot availability.**  
- **Research Support:**
  - The report identifies "cruising for parking" as a major contributor to traffic congestion (30% of urban congestion) and highlights the lack of real-time parking data in existing solutions like Passport Parking.
  - Proposed sensors align with the "Real-Time Parking Availability" section, which emphasizes reducing search time through live updates.

**FR2: The system shall allow users to view and navigate to available parking spots through a user friendly application.**  
- **Research Support:**
  - Driver behavior analysis shows drivers prefer free/on-street parking, leading to congestion. A guided app would direct users to underutilized off-street or shared spaces.
  - The "Unique Solution" section explicitly proposes app integration to address this gap.

**FR3: The system shall enable residents and businesses to list unused parking spaces for sharing.**  
- **Research Support:**
  - The "Community Participation" idea is justified by the limited parking infrastructure in Uptown Waterloo (e.g., Regina Lot often full).
  - The Uptown Parking Strategy and community feedback stress the need to optimize existing resources.

**FR4: The system shall allow drivers to book parking spaces in real-time.**  
- **Research Support:**
  - High demand during events/peak hours (CityNews Kitchener) necessitates immediate booking capabilities to prevent congestion.
  - LocoMobi World’s system for parking garages validates the feasibility of real-time management.

**FR5: The system shall include a review and rating system for shared parking spaces.**  
- **Research Support:**
  - Community complaints (Reddit, City of Waterloo bylaws) highlight trust issues and parking frustrations. A rating system ensures accountability and quality, indirectly supporting user adoption.

---

## 4. System Requirements

### Hardware Requirements

**SR1: The system shall include IoT sensors to monitor the occupancy of parking spots.**  
- **Research Support:**
  - The "Unique Solution" section explicitly recommends installing sensors in parking spots to detect occupancy.
  - Similar systems (Rumbo Mobile) use sensors but lack localization to University Avenue.

### Software Requirements

**SR2: The system shall utilize cloud-based infrastructure for real-time data processing and storage.**  
- **Research Support:**
  - The need for real-time data processing (e.g., guiding drivers instantly) aligns with cloud scalability, as referenced in Rumbo Mobile’s "smart parking ecosystem."

**SR3: The system shall support mobile app deployment for Android and iOS platforms.**  
- **Research Support:**
  - Passport Parking’s app demonstrates user reliance on mobile solutions. Cross-platform support ensures accessibility for all drivers.

### Network Requirements

**SR4: The system shall ensure stable internet connectivity for real-time updates.**  
- **Research Support:**
  - The report identifies cruising for parking as a major traffic contributor (30% congestion). Real-time updates via IoT sensors and apps (e.g., Rumbo Mobile’s model) require uninterrupted connectivity to reduce cruising. Unstable internet would replicate existing frustrations (e.g., Passport Parking’s gaps), worsen emissions, and undermine trust. Thus, stable connectivity is critical for sensor/app functionality and environmental goals.

**SR5: The system shall provide APIs for communication between sensors, mobile apps, and backend servers.**  
- **Research Support:**
  - The proposed solution involves multiple components (sensors, apps, backend). APIs are standard for such integrations, as seen in LocoMobi World’s AI-driven system.

### Security Requirements

**SR6: The system shall integrate secure payment gateways for handling transactions.**  
- **Research Support:**
  - Passport Parking’s payment feature is cited as a benchmark. Community-shared spaces require transactions, necessitating secure payments.

**SR7: The system shall implement encryption protocols (e.g., SSL/TLS) for secure data transmission.**  
- **Research Support:**
  - Passport Parking’s payment feature is cited as a benchmark. Community-shared spaces require transactions, necessitating secure payments.

---

## 5. Assumptions
- Users will have access to smartphones and stable internet connections.
- Parking spot owners will participate by listing their spaces on the platform.
- Sensors will be installed in parking spots to monitor their status.