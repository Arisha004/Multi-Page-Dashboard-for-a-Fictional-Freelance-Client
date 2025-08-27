import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle, User } from "lucide-react";

const activities = [
  {
    id: 1,
    type: 'project_completed',
    title: 'E-commerce Website',
    description: 'Project completed and delivered to client',
    time: '2 hours ago',
    status: 'completed',
    icon: CheckCircle
  },
  {
    id: 2,
    type: 'task_due',
    title: 'Mobile App Design',
    description: 'UI/UX design review due tomorrow',
    time: '4 hours ago',
    status: 'pending',
    icon: AlertCircle
  },
  {
    id: 3,
    type: 'client_message',
    title: 'New message from Sarah Johnson',
    description: 'Feedback on the latest prototype',
    time: '6 hours ago',
    status: 'unread',
    icon: User
  },
  {
    id: 4,
    type: 'project_started',
    title: 'Corporate Website Redesign',
    description: 'New project initiated with TechCorp',
    time: '1 day ago',
    status: 'active',
    icon: Clock
  },
  {
    id: 5,
    type: 'payment_received',
    title: 'Payment received',
    description: '$2,500 payment from WebFlow Solutions',
    time: '2 days ago',
    status: 'completed',
    icon: CheckCircle
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge variant="secondary" className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case 'pending':
      return <Badge variant="secondary" className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case 'active':
      return <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Active</Badge>;
    case 'unread':
      return <Badge variant="secondary" className="bg-destructive/10 text-destructive border-destructive/20">Unread</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

export default function ActivityList() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`flex items-start space-x-4 p-4 hover:bg-accent/50 transition-colors ${
                index !== activities.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <activity.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  {getStatusBadge(activity.status)}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}