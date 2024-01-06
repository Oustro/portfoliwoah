import { IBM_Plex_Serif } from "next/font/google"

const ibm_plex_serif = IBM_Plex_Serif(
  { 
    subsets: ['latin'], 
    weight: ['300'],
    style: ['italic']
  }
)

export default async function Legal() {

  const privacy = [
    {
      title: "Introduction",
      body: "Welcome to Portfoliwoah, a platform designed to showcase and share online web application work and portfolios. This privacy policy outlines how we, Oustro, LLC, collect, use, and protect your personal information on the Portfoliwoah platform.",
      points: []
    },
    {
      title: "Information We Collect",
      body: "On the Portfoliwoah platform, we collect the following types of information:",
      points: [
        {
          info: "Display Name: Your chosen username or identifier on our platform."
        },
        {
          info: "Email Address: Used for account registration, communication, and support."
        },
        {
          info: "Current Workplace: Information about your current place of employment, which is used to enhance your portfolio profile."
        }
      ]
    },
    {
      title: "Use of Information",
      body: "The information we collect is used for the following purposes:",
      points: [
        {
          info: "To create and manage your Portfoliwoah account."
        },
        {
          info: "To enhance your user experience and personalize the platform."
        },
        {
          info: "To ensure the security and operation of our service."
        }
      ]
    },
    {
      title: "Data Protection",
      body: "We are committed to protecting your personal information:",
      points: [
        {
          info: "We employ industry-standard measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information."
        },
        {
          info: "Our platform uses secure connections (SSL) to encrypt any data you provide."
        }
      ]
    },
    {
      title: "Data Sharing and Disclosure",
      body: "",
      points: [
        {
          info: "We do not sell or rent your personal information to third parties."
        },
        {
          info: "Personal information may be disclosed if required by law or if necessary to protect the rights, property, or safety of Oustro, LLC, our users, or others."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      body: "You can access, update, or request deletion of your personal information through your account settings.",
      points: []
    },
    {
      title: "Changes to This Privacy Policy",
      body: "We reserve the right to modify this privacy policy at any time. Changes will be posted on this page with an updated revision date.",
      points: []
    },
    {
      title: "Contact Us",
      body: "If you have any questions about this privacy policy, please contact us at: support@oustro.xyz",
      points: []
    }
  ]

  const terms = [
    {
      title: "Acceptance of Terms",
      body: "By accessing or using the Portfoliwoah platform, a service provided by Oustro, LLC, you agree to be bound by these terms of service. If you do not agree to these terms, please do not use our service.",
      points: []
    },
    {
      title: "Description of Service",
      body: "Portfoliwoah is a platform designed for individuals to share and showcase their online web application work and portfolios. Services may be updated or modified from time to time at our discretion.",
      points: []
    },
    {
      title: "User Accounts",
      body: "",
      points: [
        {
          info: "You must register an account and provide certain information about yourself to access the full functionality of the platform."
        },
        {
          info: "You agree to provide accurate and complete information and keep this information updated."
        },
        {
          info: "You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account."
        },
        {
          info: "You are at least 13 years of age."
        }
      ]
    },
    {
      title: "User Conduct",
      body: "",
      points : [
        {
          info: "You agree not to use the platform in any unlawful manner or in any way that could damage, disable, overburden, or impair the platform."
        },
        {
          info: "You agree not to upload, post, transmit, or share content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable."
        },
        {
          info: "You agree not to infringe on the intellectual property rights of others."
        }
      ]
    },
    {
      title: "Content Ownership and Intellectual Property Rights",
      body: "",
      points: [
        {
          info: "Users retain all ownership rights to the content they upload to Portfoliwoah."
        },
        {
          info: "By uploading content, you grant Oustro, LLC a non-exclusive, worldwide, royalty-free license to use, display, and reproduce such content in connection with the service."
        }
      ]
    },
    {
      title: "Termination and Suspension",
      body: "Oustro, LLC reserves the right to terminate or suspend your account and access to the Portfoliwoah platform for any reason, including violation of these terms.",
      points: []
    },
    {
      title: "Disclaimers",
      body: "",
      points: [
        {
          info: 'The service is provided on an "as is" and "as available" basis. Oustro, LLC expressly disclaims all warranties of any kind, whether express or implied.'
        },
        {
          info: "Oustro, LLC does not guarantee the accuracy, completeness, or usefulness of any information on the platform and neither endorses nor is responsible for the accuracy or reliability of any opinion, advice, or statement made."
        }
      ]
    },
    {
      title: "Limitation of Liability",
      body: "Oustro, LLC shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or inability to use the service.",
      points: []
    },
    {
      title: "Changes to Terms",
      body: "We reserve the right to modify these terms of service at any time. Your continued use of the service after such changes constitutes your acceptance of the new terms.",
      points: []
    },
    {
      title: "Governing Law",
      body: "These terms shall be governed by the laws of the jurisdiction in which Oustro, LLC is established, without regard to its conflict of law provisions.",
      points: []
    },
    {
      title: "Contact Information",
      body: "If you have any questions about these terms of service, please contact us at support@oustro.xyz.",
      points: []
    }
  ]

  return (
    <main className="relative min-h-screen justify-center overflow-hidden transition-all px-4 mb-16">
      <div className="mt-20 text-center">
        <h1 className={`${ibm_plex_serif.className} mt-8 text-4xl sm:text-5xl`}>Legal</h1>
        <p className="mt-8 text-xs sm:text-base">Here's our policies you agree to in order to use Portfoliwoah.</p>
      </div>
      <div className="px-4 sm:px-16 mt-20">
        <h3 className="text-xs"><span className={`${ibm_plex_serif.className} text-3xl`}>Privacy Policy</span> (Effective date: January 6th, 2024)</h3>
        {privacy.map((section, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-xl">{section.title}</h3>
            <p className="mt-2 leading-6 text-sm">{section.body}</p>
            <ul className="mt-2 leading-6 text-sm list-disc list-inside">
              {section.points.map((point, index) => (
                <li key={index}>{point.info}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="px-4 sm:px-16 mt-20">
        <h3 className="text-xs"><span className={`${ibm_plex_serif.className} text-3xl`}>Terms of Service</span> (Effective date: January 6th, 2024)</h3>
        {terms.map((section, index) => (
          <div key={index} className="mt-8">
            <h3 className="text-xl">{section.title}</h3>
            <p className="mt-2 leading-6 text-sm">{section.body}</p>
            <ul className="mt-2 leading-6 text-sm list-disc list-inside">
              {section.points.map((point, index) => (
                <li key={index}>{point.info}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
