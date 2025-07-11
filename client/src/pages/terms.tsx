import { Card, CardContent } from "@/components/ui/card";
import { ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Terms() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-2xl transition-all duration-300 bg-white dark:bg-zinc-900">
        <CardContent className="pt-8 pb-10 text-center">
          <div className="flex justify-center mb-4">
            <ScrollText className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-3xl font-bold text-black dark:text-white">
            Terms of service
          </h1>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
            We do not offer any services that requires terms of service. This will be updated in the future if necessary.
          </p>

          <div className="mt-6">
            <Link href="/">
              <Button className="rounded-full px-6 text-sm" variant="outline">
                Go back home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}