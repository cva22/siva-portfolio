import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';

export default function Accordian() {
  return (
    <div className='basis-36'>
      <div>
        <h2 className='text-3xl text-lime-500 py-3'>MY WORK</h2>
      </div>

      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                Officeworks
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                May 2021 ~ Nov 2023
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Initiative: NPS – On My Way On My Way initiative aims to streamline
            and enhance the customer and store operator experience for click and
            collect orders. It has led to a remarkable 8% increase in the Net
            Promoter Score (NPS), highlighting its positive impact on customer
            satisfaction and loyalty. This initiative demonstrates
            Officeworks&apos; commitment to innovation and excellent customer
            service, showcasing the company&apos;s dedication to providing a
            smoother and more convenient shopping experience.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            Initiative: NPS – Track and Trace Track and Trace is a web-based
            product developed for Officeworks, designed to streamline the
            integration of multiple delivery carriers and provide customers with
            real-time updates on their orders&apos; delivery status. This
            innovative solution offers Officeworks customers the convenience of
            tracking their orders and gaining insights into the expected
            delivery times. By aggregating information from different carriers,
            it ensures a seamless and efficient tracking process, ultimately
            enhancing the overall customer experience.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            Initiative: Device Bundler System (Optus Bundle) Device Bundler
            represents an innovative web-based product created through a
            collaborative effort between Officeworks and Optus. This allows
            customers to purchase both a device and a SIM card as a bundled
            package at a discounted rate. From a technical standpoint,
            &ldquo;Device Bundler&rdquo; is built as a microservices
            architecture within an orchestration distribution framework. It
            exemplifies a forward-thinking approach to customer service and
            e-commerce in today&apos;s digital landscape.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                NBN
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                Oct 2019 ~ May 2021
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Initiative: Enterprise Portal The Enterprise Portal is a
            user-friendly web-based application designed to enhance the user
            experience by providing the following features: ü Centralized
            Access: It consolidates all reports and products from various
            pillars into a single, easily accessible platform. ü Streamlined
            Administration: Different administrators for different pillars are
            efficiently managed and controlled by a super admin, ensuring smooth
            operations. ü Personalized Favorites: Users can conveniently manage
            their favorite items, tailoring their experience to their
            preferences.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            Initiative: AutoDrive AutoDrive has been meticulously designed to
            modernize and simplify existing processes. By replacing the outdated
            manual Excel-based Resource Tracker and Cost Recovery methods, it
            introduces a secure, cloud- based solution with single sign-on
            capabilities. This transition not only enhances efficiency but also
            ensures data security and accessibility.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                Object Consulting
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                May 2017 ~ Sept 2019
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <h1>Department of Justice - Victoria</h1>
            Project: WDP – Work Development and Permit The Work and Development
            Permit (WDP), initiated by the Victorian government, aids
            individuals unable to pay fines. WDP application acts as a platform
            for sponsor organizations, including medical practitioners, to apply
            for clients facing financial constraints. Clients collaborate with
            sponsors to resolve fines through accredited activities like unpaid
            work and counselling. This innovative approach supports those in
            need, encourages community engagement, and offers an alternative to
            traditional payment methods. The WDP program aims to provide
            individuals a pathway to settle fines while addressing underlying
            issues, fostering positive outcomes for all parties involved.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            <h1>Department of Land, Water and Planning - Victoria</h1>
            Project: WDP – Work Development and Permit The Work and Development
            Permit (WDP), initiated by the Victorian government, aids
            individuals unable to pay fines. WDP application acts as a platform
            for sponsor organizations, including medical practitioners, to apply
            for clients facing financial constraints. Clients collaborate with
            sponsors to resolve fines through accredited activities like unpaid
            work and counselling. This innovative approach supports those in
            need, encourages community engagement, and offers an alternative to
            traditional payment methods. The WDP program aims to provide
            individuals a pathway to settle fines while addressing underlying
            issues, fostering positive outcomes for all parties involved.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                Vix Technology
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                Sept 2016 ~ Apr 2017
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Project: Myki – Ticketing system Myki, one of the world&apos;s
            largest smartcard ticketing systems, partners with NTT Data for
            innovative ticketing strategy development and implementation. Vix
            Technology provides ticketing gates and supports PTV in simplifying
            the ticketing system.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                Cognizant
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                Mar 2014 ~ May 2016
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Project: Annuity Annuity is a Data Mart migration and reporting
            application; is to generate a summary report with reinsurer annuity
            payment. Built a central data repository from multiple sources
            providing unified view of data for reporting, storing, and analyzing
            huge amounts of structured and unstructured data.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            Project: Re-Insurance Reinsurance is a tool used to manage risk in
            MetLife Insurance Company. These application enables an insurance
            company to cover more individuals without fear of incurring
            significant financial loss. As a developer, analyzed and enhanced
            the application based on business requirements
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: 'blueviolet', color: 'white' }}>
              <Box as='span' flex='1' textAlign='left'>
                Dell Technologies
              </Box>
              <Box as='span' flex='1' textAlign='right'>
                Mar 2010 ~ Feb 2014
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Project: Mort – Consumer Business Application Mort – Phase 2 is
            built to implement the Consumer’s business data, migrated to Big
            Data environment. This helps the Business to manage the credit risk
            of an individual along with their Personal information’s with cost
            efficient.
          </AccordionPanel>
          <AccordionPanel pb={4}>
            Project: Mort – Data Source Migration Mort – Phase 1 is to test the
            Data-Load applications to meet the Functional/Business requirement
            and load the legacy data into DB2 tables (millions of data)
            Data-Load repository and automate the application. Provide warranty
            support till the application is stable. Develop a Personal Data
            information with the migrated data and build a separate repository
            with an application and automate it daily basis.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
