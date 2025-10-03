import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

/**
 * Renders the Mandatory Public Disclosure component.
 */
export default function MandatoryDisclosure() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Mandatory Public Disclosure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transparency and accountability in educational governance
            </p>
          </div>
        </section>

        {/* Disclosure Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* A. General Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A. General Information</h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                  <thead className="bg-school-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">SL NO.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">INFORMATION</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">NAME OF THE SCHOOL</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Discipline Resolute School</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">AFFILIATION NO.(IF APPLICABLE)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">SCHOOL CODE (IF APPLICABLE)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COMPLETE ADDRESS WITH PIN CODE</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        DRS<br />
                        Discipline Resolute High School<br />
                        Dindi Rd, Devarakonda, Kacharam Agraharam,<br />
                        Telangana 508248
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">PRINCIPAL NAME & QUALIFICATION</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Ms. Vijayapuli Honeymary, M.Sc. B.Ed</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">SCHOOL EMAIL ID</td>
                      <td className="px-6 py-4 text-sm text-gray-900">drsinstitutions@gmail.com</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">CONTACT DETAILS (LANDLINE/MOBILE)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        9124542111<br/>
                        9124549111
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* B. Documents and Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">B. Documents and Information</h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                  <thead className="bg-school-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">SL NO.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">DOCUMENTS AND INFORMATION</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">CLICK HERE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/Adobe Scan society reg 24-May-2024.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/Adobe Scan school NOC 30-Dec-2024 (2).pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/Adobe Scan Buliding NOC  Jun 08, 2025.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/Adobe Scan fire certificate Apr 03, 2025.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/Adobe Scan 02-Jul-2024.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="/docs/WhatsApp Image 2025-10-01 at 8.27.51 AM.jpeg"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="docs/decipline.pdf"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Teachers Details</td>
                      <td className="px-6 py-4 text-sm">
                        <a 
                          href="docs/NALGONDA SCHOOL TEACHERS DETAILS.xlsx"
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-school-orange hover:underline cursor-pointer"
                        >
                          Click Here
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* C. Result and Academics */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">C. Result and Academics</h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                  <thead className="bg-school-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">SL NO.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">DOCUMENTS AND INFORMATION</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">CLICK HERE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">FEE STRUCTURE</td>
                      <td className="px-6 py-4 text-sm text-school-orange hover:underline cursor-pointer">Click Here</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">ANNUAL ACADEMIC CALENDAR</td>
                      <td className="px-6 py-4 text-sm text-school-orange hover:underline cursor-pointer">Click Here</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">LIST OF SCHOOL MANAGEMENT COMMITTEE(SMC)</td>
                      <td className="px-6 py-4 text-sm text-school-orange hover:underline cursor-pointer">Click Here</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">LIST OF PARENT TEACHER ASSOCIATION (PTA)</td>
                      <td className="px-6 py-4 text-sm text-school-orange hover:underline cursor-pointer">Click Here</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* D. Staff (Teaching) */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">D. Staff (Teaching)</h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                  <thead className="bg-school-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">SL NO.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">INFORMATION</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">PRINCIPAL</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Ms. Vijayapuli Honeymary, M.Sc. B.Ed</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">TOTAL NO OF TEACHERS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">16</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">TGT</td>
                      <td className="px-6 py-4 text-sm text-gray-900">8</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">PRT</td>
                      <td className="px-6 py-4 text-sm text-gray-900">8</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">TEACHERS SECTION RATIO</td>
                      <td className="px-6 py-4 text-sm text-gray-900">1:1.45</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DETAILS OF SPECIAL EDUCATOR</td>
                      <td className="px-6 py-4 text-sm text-gray-900">K. Bhasker Reddy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
                      <td className="px-6 py-4 text-sm text-gray-900">J. Rajeshwar Rao</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* E. School Infrastructure */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">E. School Infrastructure</h2>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="min-w-full">
                  <thead className="bg-school-blue text-white">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">SL NO.</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">INFORMATION</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">TOTAL CAMPUS AREA OF SCHOOL (IN SQUARE FEET)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">42,000 sq ft</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">NO. AND SIZE OF THE CLASS ROOMS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">35 Classrooms, 899 sq ft each</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">NO. AND SIZE OF LABORATORY INCLUDING COMPUTER LAB</td>
                      <td className="px-6 py-4 text-sm text-gray-900">4 Labs, 1470 sq ft</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">INTERNET FACILITIES</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Yes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">NO. OF GIRLS TOILETS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">18</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">NO. OF BOYS TOILETS</td>
                      <td className="px-6 py-4 text-sm text-gray-900">25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
