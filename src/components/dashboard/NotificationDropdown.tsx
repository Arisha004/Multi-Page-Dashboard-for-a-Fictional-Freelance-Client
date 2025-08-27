import { useState } from "react";
import { Bell, Check, Clock, AlertCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const recentActivities = [
  {
    id: 1,
    type: 'project_completed',
    title: 'E-commerce Website Completed',
    description: 'Project successfully delivered to TechStore Inc',
    time: '2 hours ago',
    icon: Check,
    color: 'text-success',
    bgColor: 'bg-success/10'
  },
  {
    id: 2,
    type: 'task_due',
    title: 'Mobile App Design Due',
    description: 'UI/UX review scheduled for tomorrow',
    time: '4 hours ago',
    icon: Clock,
    color: 'text-warning',
    bgColor: 'bg-warning/10'
  },
  {
    id: 3,
    type: 'client_message',
    title: 'New Client Message',
    description: 'Sarah Johnson sent feedback on prototype',
    time: '6 hours ago',
    icon: User,
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }
];

export default function NotificationDropdown() {
  const [unreadCount, setUnreadCount] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const markAllAsRead = () => {
    setUnreadCount(0);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="relative hover-scale transition-all duration-200"
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 w-5 h-5 text-xs rounded-full p-0 flex items-center justify-center animate-pulse"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent 
        align="end" 
        className="w-80 p-0 animate-scale-in bg-card border-border shadow-large"
        sideOffset={8}
      >
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Notifications</h3>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={markAllAsRead}
                className="text-xs hover:text-primary transition-colors"
              >
                Mark all read
              </Button>
            )}
          </div>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {recentActivities.map((activity, index) => (
            <DropdownMenuItem 
              key={activity.id} 
              className="p-4 cursor-pointer hover:bg-accent/50 transition-colors focus:bg-accent/50 border-0"
            >
              <div className="flex space-x-3 w-full">
                <div className={`w-10 h-10 rounded-full ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-sm font-medium text-foreground truncate pr-2">
                      {activity.title}
                    </p>
                    {index < unreadCount && (
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-1 line-clamp-2">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        
        <DropdownMenuSeparator />
        
        <div className="p-2">
          <Button 
            variant="ghost" 
            className="w-full text-center hover:bg-accent/50 transition-colors"
            size="sm"
          >
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}