import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Plus, Calendar, DollarSign, User, MoreHorizontal, FolderOpen } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    client: "TechStore Inc",
    status: "completed",
    deadline: "2024-01-15",
    budget: "$5,000",
    progress: 100,
    description: "Modern e-commerce platform with payment integration"
  },
  {
    id: 2,
    name: "Mobile App Design",
    client: "StartupXYZ",
    status: "in-progress",
    deadline: "2024-02-28",
    budget: "$3,500",
    progress: 65,
    description: "UI/UX design for fitness tracking mobile application"
  },
  {
    id: 3,
    name: "Corporate Website Redesign",
    client: "MegaCorp Ltd",
    status: "in-progress",
    deadline: "2024-03-10",
    budget: "$8,000",
    progress: 30,
    description: "Complete website overhaul with modern design system"
  },
  {
    id: 4,
    name: "Brand Identity Package",
    client: "Creative Agency",
    status: "pending",
    deadline: "2024-02-20",
    budget: "$2,500",
    progress: 0,
    description: "Logo design, business cards, and brand guidelines"
  },
  {
    id: 5,
    name: "Dashboard Development",
    client: "DataFlow Systems",
    status: "in-progress",
    deadline: "2024-02-15",
    budget: "$4,200",
    progress: 85,
    description: "Analytics dashboard with real-time data visualization"
  },
  {
    id: 6,
    name: "Landing Page Optimization",
    client: "GrowthHack Co",
    status: "completed",
    deadline: "2024-01-08",
    budget: "$1,800",
    progress: 100,
    description: "A/B testing and conversion rate optimization"
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'completed':
      return <Badge className="bg-success/10 text-success border-success/20">Completed</Badge>;
    case 'in-progress':
      return <Badge className="bg-primary/10 text-primary border-primary/20">In Progress</Badge>;
    case 'pending':
      return <Badge className="bg-warning/10 text-warning border-warning/20">Pending</Badge>;
    case 'on-hold':
      return <Badge variant="secondary">On Hold</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

const getProgressColor = (progress: number) => {
  if (progress >= 80) return 'bg-success';
  if (progress >= 50) return 'bg-primary';
  if (progress >= 20) return 'bg-warning';
  return 'bg-muted';
};

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground text-sm lg:text-base">Manage and track all your client projects</p>
        </div>
        <Button className="gradient-primary text-primary-foreground hover:opacity-90 w-full sm:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search projects or clients..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={project.id} className="shadow-soft hover:shadow-medium transition-all duration-200 hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 min-w-0 flex-1 pr-2">
                  <CardTitle className="text-base lg:text-lg font-semibold leading-tight truncate">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center text-xs lg:text-sm text-muted-foreground">
                    <User className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                    <span className="truncate">{project.client}</span>
                  </div>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3 lg:space-y-4 p-4 lg:p-6">
              <p className="text-xs lg:text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs lg:text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div className="flex items-center text-xs lg:text-sm text-muted-foreground">
                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{new Date(project.deadline).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-xs lg:text-sm font-medium">
                  <DollarSign className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                  <span>{project.budget}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between gap-2">
                {getStatusBadge(project.status)}
                <Button variant="outline" size="sm" className="text-xs hover-scale transition-all duration-200">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <Card className="shadow-soft">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <FolderOpen className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search or filter criteria" 
                : "Get started by creating your first project"}
            </p>
            <Button className="gradient-primary text-primary-foreground">
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}