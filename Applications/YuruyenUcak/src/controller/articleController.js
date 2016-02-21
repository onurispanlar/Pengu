var articleSchema = require("../model/articleModel");

exports.getArticleById = function(id, successCallback, failureCallback) {
    articleSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

// TODO: Will be implemented by using where query
exports.getArticleBy = function(credentialMap, successCallback, failureCallback) {
    articleSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

exports.createArticle = function(params, successCallback, failureCallback) {
    var article = new articleSchema();
    
    article.title = params.title;
    article.authorId = params.sessionToken;
    article.pulishedDate = params.pulishedDate;
    article.updatedDate = params.updatedDate;
    article.pageCount = params.pageCount;
    article.language = params.language;
    article.tags = params.tags;
    article.content = params.content;
    
    article.save(
        function(err) {
            var response;
            if (err) {
                failureCallback(err);
            } else {
                successCallback(data);
            }
        }
    );
};

exports.updateArticle = function(params, successCallback, failureCallback) {
    exports.getArticleById(params.id,
        function successCallback(article){
            
            if (params.title) {
                article.title = params.title;   
            }
            
            if (params.publishedDate) {
                article.publishedDate = params.publishedDate;
            }
            
            if (params.updatedDate) {
                article.updatedDate = params.updatedDate;   
            }
            
            if (params.pageCount) {
                article.pageCount = params.pageCount;
            }
            
            if (params.language) {
                article.language = params.language;   
            }
            
            if (params.tags) {
                article.tags = params.tags;   
            }
            
            if (params.content) {
                article.content = params.content;   
            }
            
            article.save(
                function(err) {
                    var response;
                    if (err) {
                        failureCallback(err);
                    } else {
                        successCallback(data);
                    }
                }
            );
            
        }, function failureCallback(response) {
            failureCallback(response);
        }
    );
};

exports.deleteArticle = function(id, successCallback, failureCallback) {
    articleSchema.findById(
        id,
        function(err, data) {
            var response;
            if (err) {
                response = {
                    "error": true,
                    "message": "Error fetching data"
                };
                failureCallback(response);
            } else {
            // data exists, remove it.
            articleSchema.remove({
                _id: id
            },
            function(err) {
                if (err) {
                    response = {
                        "error": true,
                        "message": "Error deleting data"
                    };
                    failureCallback(response);
                } else {
                    response = {
                        "error": false,
                        "message": "Data associated with " + id + "is deleted"
                    };
                    successCallback(response);
                }
            });
        }
    });
};