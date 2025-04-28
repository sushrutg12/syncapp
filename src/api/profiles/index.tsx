import { supabase } from "@/lib/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Like, PublicProfile } from "./types";

// Define some mock profile data structure (adjust based on actual PublicProfile type if needed)
const mockProfiles: PublicProfile[] = [
  {
    id: "mock-user-1",
    first_name: "Alice",
    avatar_url: "https://picsum.photos/seed/alice/400/600", // Placeholder image
    photos: [
      {
        id: "p1",
        photo_url: "https://picsum.photos/seed/alice1/400/600",
        photo_order: 1,
      },
      {
        id: "p2",
        photo_url: "https://picsum.photos/seed/alice2/400/600",
        photo_order: 2,
      },
    ],
    answers: [
      {
        id: "a1",
        question: "My simple pleasures",
        answer_text: "Reading a good book",
        answer_order: 1,
        prompt_id: 1,
      },
    ],
    age: 28,
    city: "Mockville",
    // Add other necessary fields with default/mock values as required by the Card component
    height_cm: 170,
    school: "Mock University",
    job: "Mock Developer",
  },
  {
    id: "mock-user-2",
    first_name: "Bob",
    avatar_url: "https://picsum.photos/seed/bob/400/600",
    photos: [
      {
        id: "p3",
        photo_url: "https://picsum.photos/seed/bob1/400/600",
        photo_order: 1,
      },
    ],
    answers: [
      {
        id: "a2",
        question: "I\'m looking for",
        answer_text: "Someone to share adventures with",
        answer_order: 1,
        prompt_id: 2,
      },
      {
        id: "a3",
        question: "A life goal of mine",
        answer_text: "Travel the world",
        answer_order: 2,
        prompt_id: 3,
      },
    ],
    age: 32,
    city: "Mockington",
    height_cm: 180,
    school: "State Mock",
    job: "Mock Designer",
  },
  // Add more mock profiles if desired
];

export const useProfiles = (page_size: number = 10) => {
  return useQuery<PublicProfile[]>({
    queryKey: ["profiles", page_size],
    // Replace the original queryFn with one returning mock data
    queryFn: async (): Promise<PublicProfile[]> => {
      console.log(
        "DEMO MODE: Returning mock profiles instead of fetching from Supabase."
      );
      // Simulate network delay (optional)
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockProfiles;
    },
    // queryFn: async () => { // Original function commented out
    //   const { data, error } = await supabase
    //     .rpc("get_profiles", {
    //       page_size,
    //     })
    //     .returns<PublicProfile[]>();

    //   if (error) {
    //     throw error;
    //   }

    //   return data;
    // },
    initialData: [], // Keep initialData or adjust if needed
  });
};

export const useSkipProfile = () => {
  return useMutation({
    mutationFn: async (profile: string) => {
      const { error } = await supabase.rpc("skip_profile", {
        profile,
      });

      if (error) {
        throw error;
      }
    },
  });
};

export const useLikeProfile = () => {
  return useMutation({
    mutationFn: async ({
      profile,
      answer,
      photo,
    }: {
      profile: string;
      answer: string | undefined;
      photo: string | undefined;
    }) => {
      const { error } = await supabase.rpc("like_profile", {
        profile,
        answer,
        photo,
      });

      if (error) {
        throw error;
      }
    },
  });
};

export const useReviewProfiles = () => {
  return useMutation({
    mutationFn: async () => {
      const { error } = await supabase.rpc("review_profiles");

      if (error) {
        throw error;
      }
    },
  });
};

export const useLikes = () => {
  return useQuery<Like[]>({
    queryKey: ["likes"],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_likes").returns<Like[]>();

      if (error) {
        throw error;
      }

      return data;
    },
    initialData: [],
  });
};

export const useRemoveLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (interaction: string) => {
      const { error } = await supabase.rpc("remove_like", {
        interaction,
      });

      if (error) {
        throw error;
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
};

export const useMatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (interaction: string) => {
      const { error } = await supabase.rpc("match", {
        interaction,
      });

      if (error) {
        throw error;
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
};

export const useUnmatch = () => {
  return useMutation({
    mutationFn: async (interaction: string) => {
      const { error } = await supabase.rpc("unmatch", {
        interaction,
      });

      if (error) {
        throw error;
      }
    },
  });
};
