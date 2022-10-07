import gql from "graphql-tag";

export const COMPANY_INFO = gql`
  query companyInfo {
    company {
      ceo
      founded
      headquarters {
        city
        state
      }
      name
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      employees
      summary
      valuation
    }
  }
`;

export const PAST_LAUNCHES = gql`
  query pastLaunchesList {
    launchesPast(limit: 30) {
      id
      links {
        flickr_images
        mission_patch
      }
      rocket {
        rocket_name
      }
      launch_date_utc
      mission_name
    }
  }
`;

export const LAUNCH_DETAILS = gql`
  query launchDetails($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      details
      launch_date_utc
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      links {
        flickr_images
        mission_patch
        wikipedia
      }
    }
  }
`;