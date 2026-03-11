"use client";

import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CustomConfirmModal from "@/components/ui/CustomConfirmModal";
import { logoutAction } from "@/features/auth/actions/auth-actions";
import { LogOut } from "lucide-react";

export default function LogoutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutConfirm = async () => {
    await logoutAction();
  };

  return (
    // <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-[500px] bg-white dark:bg-black rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 p-8 text-center max-w-md mx-auto mt-20">
        <div className="w-16 h-16 bg-danger/10 text-danger rounded-full flex items-center justify-center mb-6">
          <LogOut className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Ready to Leave?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          You are about to log out of your session. Any unsaved changes may be lost. Are you sure you want to proceed?
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-danger text-white hover:bg-danger-dark px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>

        <CustomConfirmModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Log Out"
          subtitle="Are you sure you want to log out of your session?"
          type="danger"
          confirmText="Yes, Log Out"
          cancelText="Cancel"
          onConfirm={handleLogoutConfirm}
        />
      </div>
    // </DefaultLayout>
  );
}
