export interface PortfolioImage {
  filename: string;
  timestamp: string;
  file_size: number;
  analysis: {
    image_type: string;
    primary_subject: string;
    completion_stage: string;
    technical_details?: {
      materials?: string[];
      joinery_techniques?: string[];
      construction_methods?: string[];
    };
    craftsmanship_quality?: {
      precision?: string;
      surface_quality?: string;
      attention_to_detail?: string;
    };
    design_elements?: {
      style?: string;
      functional_features?: string[];
      aesthetic_features?: string[];
      color_finish?: string;
    };
    portfolio_presentation: {
      best_use: string;
      accompanying_text: string;
      quality_rating: number;
      focus_areas?: string[];
    };
  };
  keywords?: string[];
}

export interface PortfolioData {
  metadata: {
    project: string;
    total_images: number;
    analysis_status: string;
  };
  images: PortfolioImage[];
}

// Processed data for the website - imported from analysis results
export const portfolioData: PortfolioData = {
  metadata: {
    project: "Carpenter Portfolio Image Analysis",
    total_images: 64,
    analysis_status: "complete"
  },
  images: [] // Will be loaded from JSON
};

// Helper to get image URL
export const getImageUrl = (filename: string): string => {
  return `/images/${filename}`;
};

// Get unique categories from images
export const getCategories = (images: PortfolioImage[]): string[] => {
  const categories = new Set<string>();
  images.forEach(img => {
    const type = img.analysis?.design_elements?.style || img.analysis.image_type;
    categories.add(type);
  });
  return Array.from(categories);
};

// Get unique materials
export const getMaterials = (images: PortfolioImage[]): string[] => {
  const materials = new Set<string>();
  images.forEach(img => {
    img.analysis?.technical_details?.materials?.forEach(m => materials.add(m));
  });
  return Array.from(materials);
};
