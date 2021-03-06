﻿import info = require('services/Info');
import site = require('Site');
import app = require('Application');
import mapping = require('knockout.mapping');

class NewsPage extends chitu.Page {
    private model = {
        news: null,
        back: function () {
            app.back().fail(function () {
                app.redirect('#Home_NewsList');
            });
        },
        category: ko.observable()
    };

    constructor(html) {
        super(html);
        this.load.add(this.page_load);
    }

    private page_load(sender: NewsPage, args) {
        return info.getArticleById(args.id).done(function (news) {
            sender.model.news = mapping.fromJS(news);
            ko.applyBindings(sender.model, sender.element);
        });
    }
}

export = NewsPage;
