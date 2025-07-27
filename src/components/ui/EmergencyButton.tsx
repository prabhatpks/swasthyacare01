import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, X, Ambulance } from 'lucide-react';

const EmergencyButton = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleEmergencyCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      {/* Emergency Options Card */}
      {showOptions && (
        <div className="fixed bottom-20 right-4 z-40">
          <Card className="w-full max-w-sm bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emergency Contact</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowOptions(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={() => handleEmergencyCall('108')}
                  className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: 108
                </Button>
                
                <Button
                  onClick={() => handleEmergencyCall('102')}
                  variant="outline"
                  className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950"
                >
                  <Ambulance className="mr-2 h-4 w-4" />
                  Ambulance: 102
                </Button>
                
                <Button
                  onClick={() => handleEmergencyCall('+919504077534')}
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Hospital: +91-9504077534
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Emergency Button */}
      <Button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 text-white rounded-full p-4 shadow-lg animate-pulse"
        size="lg"
      >
        <Phone className="h-6 w-6" />
      </Button>
    </>
  );
};

export default EmergencyButton;