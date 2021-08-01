from django.urls import path
from . import views

urlpatterns = [
    path('articles/', views.ArticleList.as_view()),
    path('articles/<int:id>', views.ArticleDetails.as_view()),
    #path('articles', views.article_list),
    #path('articles/<int:pk>', views.article_details)
]