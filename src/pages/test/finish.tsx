import BasicLayouts from "@/components/layouts/BasicLayouts";
import FinishResult from "@/components/views/finish/FinishResult";
import { useRouter } from "next/router";
import React from "react";

const Finish = () => {
  const router = useRouter();
  const questionId = router.query;

  return (
    <BasicLayouts>
      <FinishResult questionId={`${questionId.id}`} />
    </BasicLayouts>
  );
};

export default Finish;
