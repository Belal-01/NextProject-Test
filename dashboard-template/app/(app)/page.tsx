import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Home() {
  return (
    // <DefaultLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder cards to show the layout working */}
        <div className="bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Total Users</h3>
          <p className="text-3xl font-extrabold text-primary">1,234</p>
        </div>
        <div className="bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">Active Sessions</h3>
          <p className="text-3xl font-extrabold text-success">892</p>
        </div>
        <div className="bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">System Status</h3>
          <p className="text-3xl font-extrabold text-info">Online</p>
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-6 min-h-[400px]">
           <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Recent Activity</h3>
           <div className="flex items-center justify-center h-[300px] border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
             <span className="text-gray-400">Activity Chart Placeholder</span>
           </div>
        </div>
      </div>
    // </DefaultLayout>
  );
}
