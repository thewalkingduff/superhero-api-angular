export interface SuperHero {
    results: Array<Results>
    name: string;
    images: {
        sm: string;
        lg: string;
    }
    image: {
        url: string;
    }
    
    biography: {
        alignment: string;
    }

    powerstats: {
        intelligence: number;
        strength:  number;
        speed: number;
        durability: number;
        power: number;
        combat: number; 
    },

  }
  
  export interface APIResponse<T> {
      results: Array<T>;
  }

  interface Results {
      id: string,
      name: string,
      powerstats: {
        intelligence: number;
        strength:  number;
        speed: number;
        durability: number;
        power: number;
        combat: number; 
      }
      biography: {
        alignment: string;
      }
      images: {
        sm: string;
    }
  }

