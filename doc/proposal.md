# Learning to use Fedora 4 as a BIBFRAME Linked Data Platform
Fedora 4's implementation of W3C's Linked Data Platform specification was
a major factor in deciding to use Fedora as the basis for a new BIBFRAME search
and display system called the BIBFRAME Catalog project. BIBFRAME is the Library of 
Congress's multi-year effort to replace the MARC21 format with a Linked 
Data-based vocabulary made up of four fundamental classes: Works, Instances, 
Annotations, Authorities. In the fall of 2014 Jeremy Nelson and Aaron Schmidt 
were contracted by the Library of Congress to design and build a BIBFRAME Search
and Display System, work that is being released as the BIBFRAME Catalog and BIBFRAME
Datastore projects.

The BIBFRAME Catalog is a Flask application with an HTML5 web client where most user 
interactions takes place through client-side Javascript libraries that 
dynamically loads and retrieves JSON-LD representations of the BIBFRAME resources
from the BIBFRAME Datastore. The BIBFRAME Catalog's HTML search 
display contextualize each search 
result though its design as well as offering additional search options through Elastic 
Search's built-in filtering and indexing of search results. 
To support the BIBFRAME Catalog as well as other efforts 
at Colorado College, the Semantic Server project is an open-source 
REST API wrapper that seamlessly interfaces to RDF resources stored as subject graphs 
in Fedora 4, expanded and enriched search through Elastic Search, with  a 
full SPARQL query endpoint using Fuseki. The BIBFRAME Datastore project is a BIBFRAME
specific wrapper to the Semantic Server components.

The BIBFRAME Datastore provides a REST API, file-system storage, configuration, 
and other utilities for managing Linked Data entities in the BIBFRAME Catalog. The 
REST API extends the Semantic Server's REST APIs for analytics, CRUD, and machine 
learning operations using the underlying Fedora 4, Elastic Search, and Fuseki services. 
All BIBFRAME resources, including Works, 
Authorities, Annotations, and Instances are indexed into Elastic Search 
using their JSON-LD serialization. The BIBFRAME RDF graphs are retrieved 
from the Fedora repository giving the Semantic Server the ability to leverage 
the rich Elastic Search ecosystem. Using Apache Fuseki, a full-featured
SPARQL endpoint enhances the functionality and utility of Fedora 4 as a Linked Data
platform for such uses in the BIBFRAME Catalog as Resource de-duplication. Fuseki and
Fedora 4 also allow for inference querying and open up the exciting possibilities of sharing 
linked-data resources to external sources like the Library of
Congress, OCLC, OpenLibrary, and the Libhub initiative for shared BIBFRAME resources.  

An over-arching philosophical approach, called
a "catalog pull platform",  is about building a vibrant and adaptive tool-set for 
libraries and other cultural heritages organizations to manage their physical and
digital artifacts and collections and has the added benefit of giving these cash-poor
institutions a robust and digital repository for their own communities creative output 
that is cataloged as BIBFRAME linked data. Requirements for the catalog pull platform 
are directly "pulled" from demands for 
information and operations needs from such sources
as the patrons, institutions, and algorithms.  The BIBFRAME Catalog and Datastore projects, along with other
developer efforts like a Schema.org Web Editor, an Open-Badges issuer, and other
projects are built Catalog Pull Platform tools. Fedora 4, as a Linked Data Platform, is
a core component of the Catalog Pull Platform development that started with work done at Colorado College
but now is expanding to include other local, regional, and national libraries. 

[1]: http://www.w3.org/TR/ldp/
