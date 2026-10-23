import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function FeeStructurePage() {
  const feeStructure = [
    { grade: "Pre-Primary (Nursery - UKG)", applicationFee: "₹500", admissionFee: "₹5,000", annualFee: "₹85,000" },
    { grade: "Primary (Class I - V)", applicationFee: "₹500", admissionFee: "₹5,000", annualFee: "₹95,000" },
    { grade: "Secondary (Class VI - X)", applicationFee: "₹500", admissionFee: "₹5,000", annualFee: "₹1,05,000" },
    { grade: "Senior Secondary (Class XI - XII)", applicationFee: "₹500", admissionFee: "₹5,000", annualFee: "₹1,15,000" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-gradient-to-r from-school-blue to-school-blue-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Fee Structure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transparent fee structure for academic year 2024-25
            </p>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Annual <span className="text-school-orange">Fee Details</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clear and simple fee planning for admissions and academic year expenses.
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-school-blue text-white">
                      <tr>
                        <th className="text-left p-4">Grade</th>
                        <th className="text-left p-4">Application Fee</th>
                        <th className="text-left p-4">Admission Fee</th>
                        <th className="text-left p-4">Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 font-medium text-gray-900">{fee.grade}</td>
                          <td className="p-4 text-gray-700">{fee.applicationFee}</td>
                          <td className="p-4 text-gray-700">{fee.admissionFee}</td>
                          <td className="p-4 text-gray-700">{fee.annualFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <p className="text-sm text-gray-600 mt-6 text-center">
              * Application fee is non-refundable. Fees are subject to annual revision.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
