import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    { feature: "Price", book: "$149 one-time", school: "$200+/month", apps: "$15/month" },
    { feature: "Screen Time", book: "Zero", school: "Varies", apps: "Hours daily" },
    { feature: "Languages", book: "3 (Mandarin, English, Cantonese)", school: "Usually 1", apps: "Limited" },
    { feature: "Subscription", book: "None", school: "Ongoing", apps: "Ongoing" },
    { feature: "Self-Paced", book: "Yes", school: "No", apps: "Yes" },
    { feature: "Interactive", book: "Touch & hear instantly", school: "Teacher-led", apps: "Screen-based" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Does It Compare?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why parents choose our interactive book over traditional options.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-display text-foreground"></th>
                <th className="text-center py-4 px-4">
                  <div className="bg-primary text-primary-foreground rounded-xl px-4 py-2 font-display font-bold">
                    This Book
                  </div>
                </th>
                <th className="text-center py-4 px-4 font-display text-muted-foreground">
                  Chinese School
                </th>
                <th className="text-center py-4 px-4 font-display text-muted-foreground">
                  Learning Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={index} className="border-b border-border">
                  <td className="py-4 px-4 font-semibold text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-success/10 text-success px-3 py-1 rounded-lg font-semibold">
                      {row.book}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.school}</td>
                  <td className="py-4 px-4 text-center text-muted-foreground">{row.apps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
