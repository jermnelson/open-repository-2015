# Abstract
As the primary developer of a BIBFRAME Catalog for the Library of Congress; 
Jeremy Nelson uses Fedora 4 as the critical core Linked Data Platform for 
storing and managing subject RDF graphs of BIBFRAME Linked Data. With BIBFRAME 
Catalog's user interface created by Aaron Schmidt of Influx Library Experience 
Design, a flexible approach for was needed not only for this project, but for 
other work being done by Jeremy Nelson for Colorado College. This requirement 
for a supporting multiple user and institutional demands, follows a "pull platform" 
approach that lead to the creation of an open-source integration architecture 
project simply called a Semantic Server. The Semantic Server provides a REST 
API to Fedora 4, Elastic Search and Fuseki that allows for CRUD management of 
RDF resources supporting BIBFRAME, MARC21, Schema.org, and other vocabularies 
as needed different user communities - including staff and administration - of 
library and cultural heritage organizations.

This talk will demonstrate and explore how as Fedora 4 has matured towards 
production, the strategies and approaches for providing searching and 
displaying of BIBFRAME RDF graphs using Elastic Search and Fuseki has changed 
while other uses are being actively developed as a semantic server.

