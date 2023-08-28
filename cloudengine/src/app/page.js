import React from 'react';
import styles from "./index.module.css";
import Link from 'next/link'; // Import the Link component from Next.js
import { useRouter } from 'next/navigation';
import Nav from './nav';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group1@2x.png"
        />
        <b className={styles.h2}>
          <p
            className={styles.empoweringVisionsIn}
          >{`Empowering Visions in the Cloud `}</p>
          <p className={styles.empoweringVisionsIn}>
            {" "}
            Backed by Impeccable Execution
          </p>
        </b>
        <div className={styles.areYouNewBtn}>
          <div className={styles.text}>Are you new?</div>
        </div>
        <Nav />
      </div>
      <div className={styles.bodyWrapper}>
        <div className={styles.body}>
          <img
            className={styles.mrBusinessAdvisoryHero501Icon}
            alt=""
            src="/mrbusinessadvisoryhero50-1@2x.png"
          />
          <img className={styles.maskGroupIcon1} alt="" src="/mask-group.svg" />
          <img
            className={styles.maskGroupIcon2}
            alt=""
            src="/mask-group2.svg"
          />
          <div className={styles.h5}>
            <p
              className={styles.empoweringVisionsIn}
            >{`We're Cloud Engine, architects of a simplified cloud experience. `}</p>
            <p
              className={styles.empoweringVisionsIn}
            >{`Our user-friendly meta-interface redefines how businesses engage with cloud tech. `}</p>
            <p
              className={styles.empoweringVisionsIn}
            >{`By understanding your needs, we recommend ideal solutions from top providers. `}</p>
            <p
              className={styles.empoweringVisionsIn}
            >{`With us, managing and switching clouds is seamless and hassle-free. `}</p>
            <p className={styles.empoweringVisionsIn}>
              Welcome to a future where cloud complexity is history.
            </p>
          </div>
          <b className={styles.h21}>Who we are?</b>
        </div>
      </div>
      <div className={styles.benefitsParent}>
        <div className={styles.benefits}>
          <div className={styles.icons}>
            <img
              className={styles.screenshot20230827At1118}
              alt=""
              src="/screenshot-20230827-at-1118-1@2x.png"
            />
            <img
              className={styles.screenshot20230827At11181}
              alt=""
              src="/screenshot-20230827-at-1118-2@2x.png"
            />
            <img
              className={styles.screenshot20230827At11182}
              alt=""
              src="/screenshot-20230827-at-1118-3@2x.png"
            />
            <img
              className={styles.screenshot20230827At1119}
              alt=""
              src="/screenshot-20230827-at-1119-1@2x.png"
            />
            <img
              className={styles.screenshot20230827At11191}
              alt=""
              src="/screenshot-20230827-at-1119-2@2x.png"
            />
            <img
              className={styles.screenshot20230827At11192}
              alt=""
              src="/screenshot-20230827-at-1119-3@2x.png"
            />
          </div>
          <div className={styles.h51}>
            Reduces waste and emissions, contributing to a healthier planet.
          </div>
          <div className={styles.h52}>
            Encourages use of energy-efficient technology that can save money.
          </div>
          <div className={styles.h53}>
            Enable compliance with laws and regulation.
          </div>
          <div className={styles.h54}>
            Improves brand perception with customers and partners.
          </div>
          <div className={styles.h55}>Helps recruit and retain employees.</div>
          <div className={styles.h56}>
            Spurs innovative solutions to environmental problems.
          </div>
          <div className={styles.whatAreThe}>What are the benefits?</div>
        </div>
        <div className={styles.whatIsGreenComputing}>
          <div className={styles.whatIsGreen}>What is Green Computing?</div>
          <div className={styles.greenComputingAlsoContainer}>
            <p className={styles.empoweringVisionsIn}>
              Green computing, also known as green technology, is the use of
              computers and other computing devices and equipment in
              energy-efficient and eco-friendly ways. Organizations that use
              green computing methods often deploy energy-efficient central
              processing units (CPUs), servers, peripherals, power systems and
              other IT equipment. They also focus on reducing resource use and
              properly disposing of electronic waste.
            </p>
          </div>
        </div>
        <b className={styles.ignitingYourGreen}>
          Igniting Your Green Computing Success
        </b>
      </div>
      <div className={styles.ourServicesWrapper}>
        <div className={styles.ourServices}>
          <div className={styles.card03}>
            <div className={styles.fill} />
            <div className={styles.fill1} />
            <div className={styles.fuelingYourJourneyContainer}>
              <p
                className={styles.empoweringVisionsIn}
              >{`Fueling your journey to success, `}</p>
              <p className={styles.empoweringVisionsIn}>
                one empowered choice at a time.
              </p>
            </div>
            <div className={styles.empowerSuccess}>Empower Success</div>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
          <div className={styles.card02}>
            <div className={styles.fill2} />
            <div className={styles.fill3} />
            <div className={styles.unlockInsightsAnd}>
              Unlock insights and clarity with our complimentary expert
              consultations.
            </div>
            <div className={styles.freeConsultation}>Free Consultation</div>
            <img className={styles.icon1} alt="" src="/icon1.svg" />
            <div className={styles.icon2}>
              <div className={styles.iconChild} />
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </div>
          <div className={styles.card01}>
            <div className={styles.fill4} />
            <div className={styles.fill5} />
            <img className={styles.icon3} alt="" src="/icon2.svg" />
            <div className={styles.effortlesslyOverseeAnd}>
              Effortlessly oversee and optimise your services for peak
              efficiency.
            </div>
            <div className={styles.manageEfficiently}>Manage Efficiently</div>
          </div>
          <div className={styles.dreamBigDoRightWrapper}>
            <b className={styles.dreamBigDo}>Dream big, Do right.</b>
          </div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.contactsParent}>
          <div className={styles.contacts}>
            <b className={styles.b}>+64 9 373 7513</b>
            <b className={styles.gweberaucklandacnz}>g.weber@auckland.ac.nz</b>
            <b className={styles.theUniversityOf}>
              The University of Auckland, 34 Princes Street, Auckland CBD,
              Auckland 1010
            </b>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.call24Outline}
                alt=""
                src="/call--24--outline.svg"
              />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <img
                className={styles.call24Outline}
                alt=""
                src="/open-mail--24--outline.svg"
              />
            </div>
            <img
              className={styles.contactsChild}
              alt=""
              src="/group-1000002568.svg"
            />
          </div>
          <b className={styles.h22}>
            <span>Customer service</span>
            <span className={styles.span}>.</span>
          </b>
        </div>
        <img className={styles.mapIcon} alt="" src="/map@2x.png" />
      </div>
      <div className={styles.ourPartnersCloudengineHasEParent}>
        <div className={styles.ourPartnersCloudengineContainer}>
          <p className={styles.ourPartners}>
            <b>Our Partners</b>
          </p>
          <p className={styles.empoweringVisionsIn}>&nbsp;</p>
          <p className={styles.empoweringVisionsIn}>&nbsp;</p>
          <p className={styles.empoweringVisionsIn}>
            CloudEngine has established a broad spectrum of partnerships with
            prominent organisations in hardware, software, and various IT
            products. We are dedicated to cultivating collaborations with some
            of the most cutting-edge technology providers globally, irrespective
            of their size, to present tailored solutions for your enterprise.
          </p>
          <p className={styles.empoweringVisionsIn}>&nbsp;</p>
          <p className={styles.empoweringVisionsIn}>
            These strategic partnerships underscore our commitment to remain at
            the forefront of technological advancements and industry trends. We
            harness the benefits of comprehensive training and certification
            initiatives, ensuring that we deliver nothing short of an
            exceptional customer experience.
          </p>
          <p className={styles.empoweringVisionsIn}>&nbsp;</p>
          <p className={styles.empoweringVisionsIn}>
            In conjunction with our esteemed partners and vendors, we are
            dedicated to implementing world-class technologies that
            significantly elevate both customer and staff experiences.
          </p>
          <p className={styles.empoweringVisionsIn}>
            Discover more about each of our esteemed partners below and delve
            into our approach to synergising our efforts with partners, all in
            alignment with CloudEngine's unwavering values.
          </p>
          <p className={styles.empoweringVisionsIn}>&nbsp;</p>
          <p className={styles.empoweringVisionsIn}>
            CloudEngine, Your steadfast and professional partner, originating
            from New Zealand.
          </p>
        </div>
        <div className={styles.companyLogos}>
          <img
            className={styles.amazonLogo1Icon}
            alt=""
            src="/amazon-logo-1@2x.png"
          />
          <img className={styles.behanceIcon} alt="" src="/behance@2x.png" />
          <img
            className={styles.microsoftAzureLogoIcon1689}
            alt=""
            src="/microsoft-azure-logo-icon-168977-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.emailInputFieldParent}>
        <div className={styles.emailInputField}>
          <div className={styles.bg} />
          <div className={styles.text3}>Type your Email Address</div>
          <b className={styles.email}>g.weber@auckland.ac.nz</b>
        </div>
        <div className={styles.buttonSend}>
          <div className={styles.bg1} />
          <div className={styles.text4}>Send Now</div>
        </div>
        <div className={styles.h2Parent}>
          <b className={styles.h23}>
            <span>Get In Touch</span>
            <span className={styles.span}>.</span>
          </b>
          <b className={styles.shortIntroduction}>short introduction</b>
        </div>
      </div>
      <div className={styles.aboutUsFooter}>
        <div className={styles.footer}>
          <div className={styles.footerChild} />
          <div className={styles.copyright2020}>
            Copyright © 2020 Company Name All rights reserved
          </div>
          <div className={styles.footerInner}>
            <div className={styles.parent}>
              <div className={styles.div}>+64 9 373 7513</div>
              <div className={styles.theUniversityOf1}>
                The University of Auckland, 34 Princes Street, Auckland CBD,
                Auckland 1010
              </div>
            </div>
          </div>
          <div className={styles.termOfUseParent}>
            <div className={styles.div}>Term of Use</div>
            <div className={styles.div}>Privacy Police</div>
            <div className={styles.div}>Cardholder Agreement</div>
          </div>
          <div className={styles.socialParent}>
            <div className={styles.social}>Social</div>
            <div className={styles.facebookParent}>
              <div className={styles.div}>Facebook</div>
              <div className={styles.div}>Instagram</div>
              <div className={styles.div}>Twitter</div>
              <div className={styles.div}>Pinterest</div>
              <div className={styles.div}>Linkedin</div>
            </div>
          </div>
          <div className={styles.learnMoreParent}>
            <div className={styles.social}>Learn More</div>
            <div className={styles.facebookParent}>
              <div className={styles.div}>How it work</div>
              <div className={styles.div}>Who we are</div>
              <div className={styles.div}>Careers</div>
              <div className={styles.div}>Blog</div>
              <div className={styles.div}>FAQs</div>
            </div>
          </div>
          <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
