import { FolderOpen, DollarSign, Clock, TrendingUp } from "lucide-react";
import StatsCard from "@/components/dashboard/StatsCard";
import ActivityList from "@/components/dashboard/ActivityList";
import EarningsChart from "@/components/dashboard/EarningsChart";
import TaskTypeChart from "@/components/dashboard/TaskTypeChart";

export default function Overview() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 lg:space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your freelance business.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <StatsCard
            title="Total Projects"
            value="24"
            change="+2 this month"
            changeType="positive"
            icon={FolderOpen}
            variant="primary"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <StatsCard
            title="Total Earnings"
            value="$12,450"
            change="+15% from last month"
            changeType="positive"
            icon={DollarSign}
            variant="success"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <StatsCard
            title="Tasks Due"
            value="8"
            change="3 due this week"
            changeType="neutral"
            icon={Clock}
            variant="warning"
          />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <StatsCard
            title="Success Rate"
            value="95.2%"
            change="+2.1% improvement"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EarningsChart />
        <TaskTypeChart />
      </div>

      {/* Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityList />
        </div>
        
        {/* Quick Stats Summary */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
            <h3 className="text-lg font-semibold mb-4 text-foreground">This Month</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Projects Completed</span>
                <span className="font-semibold text-foreground">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Hours Worked</span>
                <span className="font-semibold text-foreground">142</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Client Satisfaction</span>
                <span className="font-semibold text-success">98%</span>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border shadow-soft">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-destructive flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">Mobile App Design</p>
                  <p className="text-xs text-muted-foreground">Due tomorrow</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-warning flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">Website Copy Review</p>
                  <p className="text-xs text-muted-foreground">Due in 3 days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-success flex-shrink-0"></div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-foreground truncate">Brand Identity Package</p>
                  <p className="text-xs text-muted-foreground">Due next week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}