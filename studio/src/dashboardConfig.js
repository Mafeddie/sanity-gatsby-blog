export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b4c98fbd34e44f01483d89",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-m64eoaqx",
                  apiId: "1022d7d2-9e9d-49f3-8f15-db6ef7cad48b",
                },
                {
                  buildHookId: "60b4c98f6abff950c3789ab6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-y9ghgb7v",
                  apiId: "372514b8-e75c-4a83-829b-86c48c34abea",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Mafeddie/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-y9ghgb7v.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
