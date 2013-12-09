from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='plonetheme.francis',
      version=version,
      description="francis theme",
      long_description=open("README.txt").read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='',
      author='Brian Davis, Saint Francis University',
      author_email='marketing@francis.edu',
      url='http://francis.edu',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['plonetheme'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot>=0.6.0',
          'plonetheme.sunburst',
          'collective.responsivetheme',
          'Products.EasyAsPiIE',
          'Plone>=4.0',
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      )

