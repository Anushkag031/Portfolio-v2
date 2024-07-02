import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  padding: 0 1rem; // Add padding to ensure content isn't cut off on the sides
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
    width: 100%;
    max-width: 100%;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      width: 100%;
      max-width: 100%;
      
      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        width: 100%;
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5.0rem;
        }
      }
      
      h3 {
        margin-bottom: 2rem;
        width: 100%;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        width: 100%;
        
        a {
          color: #FFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;
        
        .tech-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .project {
      padding: 1.5rem 1.2rem;

      header {
        margin-bottom: 2.5rem;
        
        a > img {
          width: 4.0rem;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
      }

      p {
        margin-bottom: 1.5rem;
      }

      footer {
        .tech-list {
          gap: 1.5rem;
          font-size: 1.2rem;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .projects {
      gap: 1rem;
    }

    .project {
      padding: 1rem 0.8rem;

      header {
        margin-bottom: 2rem;
        
        a > img {
          width: 3.0rem;
        }
      }

      h3 {
        margin-bottom: 1rem;
        font-size: 2rem;
      }

      p {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      footer {
        .tech-list {
          gap: 1rem;
          font-size: 1rem;
        }
      }
    }
  }

  @media (max-width: 414px) { // Adjusted media query for 414px
    .projects {
      gap: 0.5rem;
    }

    .project {
      padding: 0.8rem 0.5rem;

      header {
        margin-bottom: 1.5rem;
        
        a > img {
          width: 2.5rem;
        }
      }

      h3 {
        margin-bottom: 0.8rem;
        font-size: 1.8rem;
      }

      p {
        margin-bottom: 0.8rem;
        font-size: 1rem;
      }

      footer {
        .tech-list {
          gap: 0.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }
`;
