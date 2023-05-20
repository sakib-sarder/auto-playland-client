import { Player } from "@lottiefiles/react-lottie-player";
import useTitle from "../../../Hooks/useTitle";
import animation from "../../../assets/question.json";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-gradient font-bold text-4xl">
        Frequntly Ask Questions
      </h1>
      <div className="mt-4">
        <div className="flex flex-col-reverse md:flex-row items-center px-3 md:px-0">
          <Accordion allowMultipleExpanded={false} className="md:w-1/2">
            {/* First Qusetion  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="bg-orange-100 font-semibold text-sm p-2">
                <span className="block font-bold">Access Token:</span>
                An access token is a credential used to access protected
                resources or perform authorized actions. It is generated after
                successful authentication and contains user identification and
                permissions. When a client wants to access protected resources,
                it includes the access token in the request headers. The server
                validates the token, checks its validity and permissions, and
                grants or denies access accordingly. Access tokens have a
                limited lifespan and expire after a short period.
                <span className="block font-bold"> Refresh Token:</span>A
                refresh token is a long-lived credential used to obtain a new
                access token when the current one expires. It is issued during
                authentication and securely stored by the client application.
                When the access token expires, the client sends the refresh
                token to the token endpoint or authorization server. The server
                validates the refresh token and, if valid, issues a new access
                token. This process allows users to continue accessing resources
                without re-authenticating.{" "}
                <span className="block font-bold">Storage:</span> Tokens can be
                securely stored on the client-side using methods such as secure
                HTTP-only cookies, local storage, session storage, or token
                storage libraries. The choice of storage mechanism depends on
                the specific security requirements of the application. It is
                important to select a secure storage method to prevent
                unauthorized access to the tokens.
              </AccordionItemPanel>
            </AccordionItem>
            {/* Second Question  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Compare SQL and NoSQL databases?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="font-semibold text-sm bg-orange-100 p-2">
                SQL and NoSQL are two different types of databases that have
                distinct characteristics and are suitable for different use
                cases. Here is a comparison between SQL and NoSQL databases:{" "}
                <br />
                <span className="font-bold block py-1">SQL Databases:</span>
                <ul>
                  <li>
                    <span className="font-bold">Structure:</span> SQL databases
                    are based on a structured schema that defines the tables,
                    columns, and relationships between data entities. They
                    follow a rigid structure with predefined schemas.
                  </li>
                  <li>
                    <span className="font-bold">Data Model:</span>SQL databases
                    use a relational data model, organizing data into tables
                    with rows and columns. The relationships between tables are
                    established using primary and foreign keys.
                  </li>
                  <li>
                    <span className="font-bold">Query Language:</span> SQL
                    (Structured Query Language) is used to interact with SQL
                    databases. It provides a standardized language for querying,
                    manipulating, and managing data.
                  </li>
                </ul>
                <span className="font-bold block py-1">NoSQL Databases:</span>
                <ul>
                  <li>
                    <span className="font-bold">Structure:</span> NoSQL
                    databases are schema-less or have flexible schemas, allowing
                    for dynamic and unstructured data.
                  </li>
                  <li>
                    <span className="font-bold">Data Model:</span>NoSQL
                    databases use various data models such as key-value,
                    document, columnar, or graph. Each model provides different
                    data organization and querying capabilities.
                  </li>
                  <li>
                    <span className="font-bold">Query Language:</span> NoSQL
                    databases may have their own query languages, although some
                    also support SQL-like querying. However, the query
                    capabilities are often simpler compared to SQL databases.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            {/* Third Question  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is express js? What is Nest JS?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="font-semibold text-sm bg-orange-100 p-2">
                <span className="font-bold block py-1">Express.js:</span>
                Express.js is a minimalistic and flexible web application
                framework for Node.js. It provides a set of features and
                utilities for building web applications and APIs. Express.js
                simplifies the process of handling HTTP requests, routing,
                middleware management, and view rendering. It allows developers
                to quickly set up server-side applications and handle various
                aspects of web development.
                <span className="font-bold block py-1">Nest.js:</span>
                Nest.js is a progressive and opinionated framework for building
                efficient, scalable, and maintainable server-side applications.
                It is built with TypeScript and heavily inspired by Angular,
                borrowing many of its concepts and architectural patterns.
                Nest.js focuses on modularity, dependency injection, and an
                organized folder structure to create robust and extensible
                applications.
              </AccordionItemPanel>
            </AccordionItem>
            {/* Fourth Question  */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is MongoDB aggregate and how does it work?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className="font-semibold text-sm bg-orange-100 p-2">
                In MongoDB, the{" "}
                <span className="font-bold">aggregate function</span> is used to
                perform advanced data aggregation operations on collections. It
                allows you to process and analyze data, perform calculations,
                apply transformations, and generate aggregated results. <br />{" "}
                The aggregate function takes an array of stages as its
                parameter. Each stage defines an operation or transformation to
                be applied to the documents in the collection. The stages are
                executed sequentially, with the output of one stage serving as
                the input for the next stage.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <div className="md:w-1/2">
            <Player src={animation} autoplay loop></Player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
