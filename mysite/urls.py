# -*- coding: utf-8 -*-
from django.conf.urls import include, url
from django.urls import path
from mysite import views


urlpatterns = [
    # url(r'^$', views.index)
    # path('', views.mysiteListView.as_view(), name="list"),
    path('', views.AssetStatusView),
]
