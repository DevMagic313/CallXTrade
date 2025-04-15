
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { UserProfileForm } from '@/components/user/UserProfileForm';
import { ChangePasswordForm } from '@/components/user/ChangePasswordForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const UserProfile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    position: 'Customer Service Representative',
    location: 'San Francisco, CA',
    bio: 'Experienced customer service professional with 5+ years in the telecommunications industry.',
    skills: ['Communication', 'Problem Solving', 'Technical Support', 'CRM Software'],
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
  });
  
  const handleProfileUpdate = (updatedData: any) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUserData({
        ...userData,
        ...updatedData
      });
      
      setIsLoading(false);
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    }, 1500);
  };
  
  const handlePasswordChange = (passwords: { currentPassword: string, newPassword: string }) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Password updated",
        description: "Your password has been changed successfully.",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-callx-blue mb-8">Your Profile</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="profile">Profile Information</TabsTrigger>
              <TabsTrigger value="security">Security Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <UserProfileForm 
                userData={userData}
                onSubmit={handleProfileUpdate}
                isLoading={isLoading}
              />
            </TabsContent>
            
            <TabsContent value="security">
              <ChangePasswordForm 
                onSubmit={handlePasswordChange}
                isLoading={isLoading}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
