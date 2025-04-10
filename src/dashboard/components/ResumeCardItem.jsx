import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader2Icon, MoreVertical } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import GlobalApi from "./../../../service/GlobalApi";
import { toast } from "sonner";

function ResumeCardItem({ resume, refreshData }) {
  const navigation = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = () => {
    setLoading(true);
    GlobalApi.DeleteResumeById(resume.documentId).then(
      (resp) => {
        console.log(resp);
        toast("Resume Deleted!");
        refreshData();
        setLoading(false);
        setOpenAlert(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Parent wrapper for full hover effect */}
      <div
        className="hover:scale-105 transition-all hover:shadow-lg shadow-primary border-t-4 rounded-lg overflow-hidden"
        style={{
          borderColor: resume?.themeColor, // Keep theme color only on the border
        }}
      >
        {/* Resume Preview (Keeps Pink, Purple Gradient) */}
        <Link to={"/dashboard/resume/" + resume.documentId + "/edit"}>
          <div className="p-14 bg-gradient-to-t from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center h-[280px]">
            <img src="/cv.png" width={80} height={80} alt="Resume Preview" />
          </div>
        </Link>

        {/* Bottom Section (Title & Actions) */}
        <div
          className="p-3 flex justify-between items-center text-white"
          style={{
            background: resume?.themeColor, // Apply theme color only here
          }}
        >
          <h2 className="text-sm font-semibold">{resume.title}</h2>

          {/* Dropdown Menu with Matching Theme */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="p-2 rounded-md"
              style={{ backgroundColor: resume?.themeColor }}
            >
              <MoreVertical className="h-4 w-4 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => navigation("/dashboard/resume/" + resume.documentId + "/edit")}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigation("/my-resume/" + resume.documentId + "/view")}
              >
                View
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigation("/my-resume/" + resume.documentId + "/view")}
              >
                Download
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={openAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your resume.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpenAlert(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete} disabled={loading}>
              {loading ? <Loader2Icon className="animate-spin" /> : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default ResumeCardItem;
