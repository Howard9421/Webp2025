#from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json 
import logging
from .models import CourseTable

logger=logging.getLogger('django')

# Create your views here.
from django.http import HttpResponse

def myIndex(request):
    my_name = request.GET.get('name' , "CGU")
    return HttpResponse("Hello" + my_name)
@api_view(['GET'])
def addcourse_post(request):
    Department=request.GET.get('Department', '')
    CourseTitle=request.GET.get('CourseTitle', '')
    Instructor=request.GET.get('Instructor', '')
    #location=request.GET.get('location', '')

    new_post=CourseTable()
    new_post.Department=Department
    new_post.CourseTitle=CourseTitle
    new_post.Instructor=Instructor
    new_post.save()
    logger.debug(" ************** myhello_api: "+ Department)
    if Department:
        return Response({"data": Department + "insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def courselist_post(request):
        posts = CourseTable.objects.all().values()
        return JsonResponse(list(posts), safe=False)
        #return Respone({"data":
        #                json.dumps(
        #                    list(posts),
        #                    indent=1,
        #                    cls = DjangoJSONEncoder)},
        #                status=status.HTTP_200_OK)
