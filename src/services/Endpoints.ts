  // Base API endpoints
  const ENDPOINTS = {
    // Auth endpoints
    AUTH: {
      REGISTER: "/auth/register",
      LOGIN: "/auth/login",
      LOGOUT: "/auth/logout",
      VERIFY_EMAIL: "/auth/verify/:token",
      FORGOT_PASSWORD: "/auth/forgot-password",
      RESET_PASSWORD: "/auth/reset-password",
      CREATE_USERPROFILE: "/auth/createUserProfile",
      SETUP_2FA: "/auth/enable2FA",
      ENABLE_ONBOARDING: "/auth/onboarding",
      VERIFY_OTP: "/auth/verify-otp",
      RESEND_OTP: "/auth/resend-otp",
      // GOOGLE: "/auth/google",
      // GOOGLE_CALLBACK: "/auth/google/callback",
    },

    ELECTION: {
      getUserElections: "/auth/getUserElections",
      getElectionById: "/auth/:id",
      getQuestionsByElectionId: "/auth/getAllQuestions/:id",
      getCandidatesByQuestionId: "/auth/getAllCandidates/:id"
    },

    VOTE: {
      checkVote: "/vote/voteCheck",
    }

  }

  export default ENDPOINTS