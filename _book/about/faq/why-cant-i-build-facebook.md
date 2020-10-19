# Can I build Facebook / AirBnB ?

Budibase is designed for a specific scaling model. Simply put, its "Many smaller instances".

By "smaller", I mean not Facebook, Amazon. Budibase is intended to be able to handle a very large amount of instances \(=databases\), each databse having potentially low-thousands of users.

A bit like Salesforce. When you create a Salesforce instance - this instance is your data only, physically separated from other instances.

Having said that - building a Facebook is still partially possible. You build the user-centric parts with Budibase \(Photo albums, account settings\). You then build the social graph with a cassandra backed service, and inegrate the two. It can still work well - you just cant build the whole thing wit Budibase. Facebook may be a poor example, but hopefully you get the point.

