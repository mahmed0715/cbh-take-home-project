# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
Tickets and their details I am assuming only the context of Backend operation, no UI or api related changes are here in these tickets, though adding possible UI related funcions to add UI design and inserting the agent custom id to the database.

1. Create database column in Agents table named 'agent_id' which will be a unique string
Label: Database
Estimated man-hour: 4 hours including risk factor analysis
Explanation: At the first place we need to add a new column to Agents table to hold the custom agant_id which will be then fetched and be used in the pdf generation function to show in pdf.
To update table name: Agents
New column name to be added: agent_id
Type: varchar
Max-length: 20
Index: unique
Note: Please track the database query to add the column to the right table, to add to the parent ticket Please check impact to other functionalities. 


2. Update codebase in getShiftsByFacility function to find shifts by Agents and return shifts with their custom agent_id from agent table
Label: Codebase
Estimated man-hour: 6
Pleae do the query update first to fetch the shifts with their agents agent_id associated with it.
Note: Please track the newly updated query in the parent ticket.

3. Update codebase generateReport function to use the agent_id in pdf instead of database record id
Label: Codebase
Estimated man-hour: 3

4. Create function to assign unique agent_id for each agent
Label: Codebase
Estimated man-hour: 4

These below tickets are UI and agent_id insertion related, those can be decided by the PM
5. Create UI design for the facilities to assign a custom id to the agents, which will insert the agent_id to the proper table.
Label: UI design
Estimated man-hour: 6 hours by UI designer
Assignee: One of the UI designer

6. Create UI from the design made by the designer
Label: UI
Estimated man-hour: 6

6. Create api for incoming requests to set agent_id to a certain agent.
Label: Backend
Estimated man-hour: 6
