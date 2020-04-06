# HW3-REDIS

**CONCEPTUAL QUESTIONS**
> *Describe three desirable properties for infrastructure.*
1) <p align="justify">Scalability is one the major properties of an infrastructure. An infrastructure should have the capability to cope and perform well under an increased workload. A system that scales is able to maintain/increase its level of performance or efficiency even as it is tested by larger and larger operational demands. In short a system can increase specific units in response to demand.</p>

2) <p align="justify">Availabilty is the second major properties of an infrastructure. High availability refers to a system or component that is operational without interruption for long periods of time. High availability is something that indicates a service that experiences minimal downtime.</p>

3) <p align="justify">Efficiency means avoiding any redundant work. It also means shifting responsibility to low cost components to decrease the overall production cost.</p>

> *Describe some benefits and issues related to using Load Balancers.*
<p align="justify">Load balancing can lead to high availability and scalability by balancing the load or incoming traffic equally amongst all the servers. This ensures availability and healthy servers all the time. It can also ensure scalability by requesting new instances if any of the server ever went down. But along with these advantages for an infrastructure, it can also mean that if the load balancer along with the secondary backup went down, it may lead to a high downtime period. The servers downstream would become offline until the issue gets resolved. Or the only option to reduce the downtime is manual intervention to route the requests. So there is a toss between high availability and consistency during such a scenario.</p>

> *What are some reasons for keeping servers in seperate availability zones?*
<p align="justify">Availability zones are isolated production environments. Important benefits from having multiple availability zones deployments include no i/o delays during backups as backups are taken from standby instances. No interruptions to i/o when applying patches or performing upgrades for maintenance purposes. Increase in responsiveness when load balancing is used. If one zone is constrained, the instances in other zones can digest the traffic.</p>

> *Describe the Circuit Breaker and Bulkhead pattern.*
<p align="justify">The Bulkhead pattern is a type of application design that is tolerant of failure. In a bulkhead architecture, elements of an application are isolated into pools so that if one fails, the others will continue to function.  This design helps to isolate failures, and allows you to sustain service functionality for some consumers, even during a failure. The Circuit Breaker pattern can prevent an application from repeatedly trying to execute an operation that's likely to fail. Allowing it to continue without waiting for the fault to be fixed or wasting CPU cycles while it determines that the fault is long lasting. The Circuit Breaker pattern also enables an application to detect whether the fault has been resolved. If the problem appears to have been fixed, the application can try to invoke the operation.</p>

[SCREENCAST](https://drive.google.com/open?id=1EBAWwbDIfxpqYPiuM7W0p4EUMyBmLezJ)
