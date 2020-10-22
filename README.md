# Bookmark APIs

Rest apis written in Nodejs language with express framework and Mysql database. With these apis you can bookmark a link and can add tag to it.

# Features

* Create a bookmark
* Delete a bookmark
* Retrieve all bookmarks
* Create a tag
* Delete a tag
* Retrieve all tags
* Add a tag to a bookmark
* Delete a tag from bookmark

## Get routes
visit http://localhost:3000
* /bookmarks           (get all bookmarks)
* /tags                (get all tags)
       

## Post routes
visit http://localhost:3000
* /bookmarks           (create a bookmark)
* /tags                (create a tag)
* /connection          (add a tag to a bookmark, pass both Id in req.body)
## Delete routes
visit http://localhost:3000
* /bookmarks           (Delete a bookmark)
* /tags                (Delete a tag)
* /connection/:Id?tag_id=tag_id     (add a tag to bookmark , Id is bookmark id to which you want to add a tag with id tag_id)

                       

## Bookmark table
* Id: Unique id of the bookmark (something like UUID) 
* Link: Link of the bookmark (Should be unique) 
* Title: Title of the bookmark 
* Time Created: Time when bookmark was created (in epoch time) 
* Time updated: Time when bookmark was updated (in epoch time) 
* Publisher: Publisher of the bookmark 


## Tag table
* Id: Unique id of the tag (something like UUID) 
* Title: Title of the tag (Should be unique) 
* Time Created: Time when tag was created (in epoch time) 
* Time Updated: Time when tag was created (in epoch time)

## Connection table
* ID : Primary key
* Bookmark_Id : foreign key to Id in bookmark table
* Tag_id : foreign key to Id in tag table
 
