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
    article.author_id = params.sessionToken;
    article.pulished_date = params.pulished_date;
    article.created_date = params.created_date;
    article.updated_date = params.updated_date;
    article.page_count = params.page_count;
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
    var article = new articleSchema();
    
    exports.getArticleById(params.id,
        function successCallback(){
            
            if (params.title) {
                article.title = params.title;   
            }
            
            if (params.pulished_date) {
                article.pulished_date = params.pulished_date;   
            }
            
            if (params.updated_date) {
                article.updated_date = params.updated_date;   
            }
            
            if (params.page_count) {
                article.page_count = params.page_count;   
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