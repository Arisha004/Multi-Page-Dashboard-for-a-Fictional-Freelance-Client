import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: LucideIcon;
  variant?: 'default' | 'success' | 'warning' | 'primary';
}

export default function StatsCard({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon,
  variant = 'default'
}: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'bg-success';
      case 'warning':
        return 'bg-warning';
      case 'primary':
        return 'bg-primary';
      default:
        return 'bg-card';
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-success';
      case 'negative':
        return 'text-destructive';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <Card className="shadow-soft hover:shadow-medium transition-all duration-200 h-full border border-border">
      <CardContent className="p-6 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-foreground">
              {value}
            </p>
            {change && (
              <p className={cn("text-sm", getChangeColor())}>
                {change}
              </p>
            )}
          </div>
          
          <div className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ml-4",
            getVariantStyles()
          )}>
            <Icon className={cn(
              "w-6 h-6",
              variant === 'default' ? "text-primary" : "text-white"
            )} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}