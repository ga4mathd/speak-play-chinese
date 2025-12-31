import { Check } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    { feature: "One-time Price", book: "$149", school: "$200+/mo", apps: "$15/mo" },
    { feature: "Screen Time", book: "Zero", school: "Varies", apps: "Hours" },
    { feature: "Languages", book: "3", school: "1", apps: "Limited" },
    { feature: "Subscription", book: "None", school: "Ongoing", apps: "Ongoing" },
    { feature: "Interactive", book: "Touch & hear", school: "Teacher-led", apps: "Screen" },
  ];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Comparison</p>
          <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
            How Does It Compare?
          </h2>
        </div>

        {/* Mobile: Cards layout */}
        <div className="lg:hidden space-y-3">
          {features.map((row, index) => (
            <div key={index} className="bg-card rounded-lg p-4 border border-border">
              <p className="text-xs text-muted-foreground mb-2">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-md font-medium text-xs">
                    <Check className="w-3 h-3" />
                    {row.book}
                  </span>
                  <p className="text-[10px] text-muted-foreground mt-1">This Book</p>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground text-xs">{row.school}</span>
                  <p className="text-[10px] text-muted-foreground mt-1">School</p>
                </div>
                <div className="text-center">
                  <span className="text-muted-foreground text-xs">{row.apps}</span>
                  <p className="text-[10px] text-muted-foreground mt-1">Apps</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Table */}
        <div className="hidden lg:block max-w-3xl mx-auto">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground"></th>
                  <th className="text-center py-3 px-4">
                    <span className="bg-primary text-primary-foreground rounded-md px-3 py-1 font-semibold text-xs">
                      This Book
                    </span>
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground text-xs">
                    Chinese School
                  </th>
                  <th className="text-center py-3 px-4 font-medium text-muted-foreground text-xs">
                    Learning Apps
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 font-medium text-foreground text-sm">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex items-center gap-1 bg-success/10 text-success px-2 py-0.5 rounded-md font-medium text-xs">
                        <Check className="w-3 h-3" />
                        {row.book}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center text-muted-foreground text-xs">{row.school}</td>
                    <td className="py-3 px-4 text-center text-muted-foreground text-xs">{row.apps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
