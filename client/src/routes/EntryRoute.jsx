import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { ensureAnonymousSession, getProfileStatus } from "../api/userAPI";

export const EntryRoute = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        await ensureAnonymousSession();
        const { completed } = await getProfileStatus(); // 프로필 완료 여부 확인
        if (!mounted) return;

        console.log("프로필 완료 여부 확인", completed);

        navigate(completed ? "/main" : "/intro", { replace: true });
      } catch (error) {
        if (!mounted) return;
        console.error(
          "EntryRoute 상태 조회 실패:",
          error?.response?.status,
          error?.response?.data || err?.message
        );
        // 상태 조회 실패 시 안전하게 인트로
        navigate("/intro", { replace: true });
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
    
  }, [navigate]);

  if (loading) return <LoadingSpinner />;
  return null;
}
